import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PetComponent } from './pet/pet.component';
import { PetService } from './pet.service';
import { AppRoutingModule } from './/app-routing.module';
import { OrgsComponent } from './orgs/orgs.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { OrgDetailComponent } from './org-detail/org-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SplashComponent } from './splash/splash.component';
import { OrgCardComponent } from './org-card/org-card.component';
import { OrgRegisterComponent } from './org-register/org-register.component';
import { OrgLoginComponent } from './org-login/org-login.component';
import { UserRegisterComponent } from './user-register/user-register.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PetComponent,
    OrgsComponent,
    NewPetComponent,
    OrgDetailComponent,
    UserDetailComponent,
    SplashComponent,
    OrgCardComponent,
    OrgRegisterComponent,
    OrgLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
