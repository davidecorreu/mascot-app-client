import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { UserRegisterComponent } from "../user-register/user-register.component";

import { PetService } from "../pet.service";
import { Pet } from "../models/pet.model";

@Component({
  selector: "app-pet-select",
  templateUrl: "./pet-select.component.html",
  styleUrls: ["./pet-select.component.scss"]
})
export class PetSelectComponent implements OnInit {
  pet: Pet;
  public id: string;
  loggedIn: boolean = false;
  accept: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getPet();
  }

  getPet(): void {
    this.id = this.route.snapshot.paramMap.get("_id");
    this.petService.getPet(this.id).subscribe(pet => (this.pet = pet));
  }

  buttonAccept(): void {
    this.accept = true;
  }
  showPet(): void {
    console.log(this.pet);
  }
}
