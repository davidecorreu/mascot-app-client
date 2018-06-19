import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { AlertModule } from "ngx-bootstrap/alert";
import { ModalModule } from "ngx-bootstrap/modal";

import { AppComponent } from "./app.component";
import { PetsComponent } from "./pets/pets.component";
import { UserComponent } from "./user/user.component";
import { PetService } from "./pet.service";
import { AppRoutingModule } from ".//app-routing.module";
import { OrgsComponent } from "./orgs/orgs.component";
import { NewPetComponent } from "./new-pet/new-pet.component";
import { OrgDetailComponent } from "./org-detail/org-detail.component";
import { SplashComponent } from "./splash/splash.component";
import { OrgCardComponent } from "./org-card/org-card.component";
import { OrgRegisterComponent } from "./org-register/org-register.component";

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    OrgsComponent,
    NewPetComponent,
    OrgDetailComponent,
    SplashComponent,
    OrgCardComponent,
    OrgRegisterComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule {}
