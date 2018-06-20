import { Component, OnInit } from '@angular/core';
import { OrgLoginComponent } from '../org-login/org-login.component';
import { OrgRegisterComponent } from '../org-register/org-register.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { UserRegisterComponent } from '../user-register/user-register.component';

@Component({
  selector: 'app-app-login-screen',
  templateUrl: './app-login-screen.component.html',
  styleUrls: ['./app-login-screen.component.scss']
})
export class AppLoginScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
