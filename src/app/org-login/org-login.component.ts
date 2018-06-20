import { Component, OnInit } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-org-login',
  templateUrl: './org-login.component.html',
  styleUrls: ['./org-login.component.scss']
})
export class OrgLoginComponent implements OnInit {
  orgLogin  = {
    name: null,
    password: null
  }
  errorMessage: string = '';
  successMessage: string ='';

  constructor(private petService: PetService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit () {
    this.petService.loginOrg(this.orgLogin)
    .subscribe(res => {
      if (res.hasOwnProperty('jwt_token')) {
        this.successMessage = 'Login Successfull'
        this.errorMessage = '';
        this.router.navigate([`/orgs/${this.orgLogin.name}`]);
      }
    },
    httpErr => {
      this.errorMessage = httpErr.error;
    })
  }

}
