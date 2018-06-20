import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { PetService } from '../pet.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: "app-user-register",
  templateUrl: "./user-register.component.html",
  styleUrls: ["./user-register.component.scss"]
})
export class UserRegisterComponent implements OnInit {
  user: User = new User();
  password: string = "";
  repassword: string = "";
  errorMessage: string = "";
  successMessage: string = "";

  constructor(private petService: PetService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {}

  onSubmit() {
    console.log("onSubmit()");
    if (this.password != this.repassword) {
      this.errorMessage = "The passwords are not matching";
      return;
    }
    const userObj = {
      ...this.user,
      password: this.password
    }
    this.petService.addUser(userObj)
    .subscribe(response => {
      console.log('The response from the backend:',response);
      // add some logic here to show confirmation message
      if (response.hasOwnProperty('jwt_token')) {
        this.successMessage = 'New User added successfully'
        this.errorMessage = '';
        if (this.route.snapshot.routeConfig.path === 'login') this.location.back();
      }
    });
  }
}
