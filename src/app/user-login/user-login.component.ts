import { Component, OnInit } from "@angular/core";
import { AlertModule } from "ngx-bootstrap/alert";
import { PetService } from "../pet.service";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.scss"]
})
export class UserLoginComponent implements OnInit {
  userLogin: object = {
    email: null,
    password: null
  };
  errorMessage: string = "";
  successMessage: string = "";

  constructor(
    private petService: PetService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.petService.loginUser(this.userLogin).subscribe(res => {
      if (res.hasOwnProperty("jwt_token")) {
        this.successMessage = "Login Successfull";
        this.errorMessage = "";
        console.log('this.route.snapshot.routeConfig.path.search(pets) :', this.route.snapshot.routeConfig.path.search('pets'))

        if (this.route.snapshot.routeConfig.path.search('pets') == -1)
          this.router.navigateByUrl("/pets");
      }
    });
  }
}
