import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PetsComponent } from "./pets/pets.component";
import { OrgsComponent } from "./orgs/orgs.component";
import { OrgDetailComponent } from "./org-detail/org-detail.component";
import { NewPetComponent } from "./new-pet/new-pet.component";
import { SplashComponent } from "./splash/splash.component";
import { UserRegisterComponent } from "./user-register/user-register.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { PetSelectComponent } from "./pet-select/pet-select.component";
import { AppLoginScreenComponent } from "./app-login-screen/app-login-screen.component";

const routes: Routes = [
  { path: "", redirectTo: "/splash", pathMatch: "full" },
  { path: "splash", component: SplashComponent },
  { path: "user/register", component: UserRegisterComponent },
  { path: "user/login", component: UserLoginComponent },
  { path: "pets", component: PetsComponent },
  { path: "pets/:_id", component: PetSelectComponent },
  { path: "orgs", component: OrgsComponent },
  { path: "orgs/:_id", component: OrgDetailComponent },
  { path: "orgs/:_id/pets", component: NewPetComponent },
  { path: "login", component: AppLoginScreenComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
