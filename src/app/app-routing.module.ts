import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserComponent } from "./user/user.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { OrgsComponent } from "./orgs/orgs.component";
import { OrgDetailComponent } from "./org-detail/org-detail.component";
import { PetComponent } from "./pet/pet.component";
import { NewPetComponent } from "./new-pet/new-pet.component";
import { SplashComponent } from "./splash/splash.component";

const routes: Routes = [
  { path: "", redirectTo: "/splash", pathMatch: "full" },
  { path: "splash", component: SplashComponent },
  { path: "user", component: UserComponent },
  { path: "user/:_id", component: UserDetailComponent },
  { path: "orgs", component: OrgsComponent },
  { path: "orgs/:_id", component: OrgDetailComponent },
  { path: "orgs/:_id/pets", component: NewPetComponent },
  { path: "pets/:_id", component: PetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
