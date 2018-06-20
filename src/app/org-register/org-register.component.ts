import { Component, OnInit } from '@angular/core';
import { Org } from '../models/org.model';
import { PetService } from '../pet.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { Router } from '@angular/router';


@Component({
  selector: 'app-org-register',
  templateUrl: './org-register.component.html',
  styleUrls: ['./org-register.component.scss']
})
export class OrgRegisterComponent implements OnInit {
  submitted = false;
  org: Org = new Org();
  errorMessage: string = '';
  successMessage: string ='';
  password: string = '';
  repassword: string= '';

  constructor(private petService: PetService,
              private router: Router) {}

  ngOnInit() {}

  onSubmit () {
    this.submitted = true;
    console.log(this.org);
    if (this.password != this.repassword) {
      this.errorMessage = 'The passwords are not matching';
      return;
    }

    const orgObj =  {
      ...this.org,
      password: this.password
    }

    this.petService.addOrg(orgObj)
    .subscribe(response => {
      console.log('The response from the backend:',response);
      // add some logic here to show confirmation message
      if (response.hasOwnProperty('jwt_token')) {
        this.successMessage = 'New Organization added successfully'
        this.errorMessage = '';
        this.router.navigate([`/orgs/${this.org.name}`]);
      }
    }, httpErr => {

      console.log('somthing went wrong, httpErr:', httpErr);
      const error = httpErr.error.errors[0];
      this.errorMessage = error;
      if (error.includes('duplicate key') != null) {
        if (error.includes('name') != null) {
          // the name is already in the database
          this.errorMessage = 'This name already exists';
        }
        else if (error.includes('email') != null) {
          // the email is already in the database
          this.errorMessage = 'This email already exists';
        }
      }
    });
  }
}
