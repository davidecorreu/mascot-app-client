import { Component, OnInit } from "@angular/core";
import { PetService } from "../pet.service";
import { Pet } from "../models/pet.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  constructor(public petService: PetService) {}
  selectedPet: Pet = null;

  ngOnInit() {
    this.petService.selectedPet.subscribe(value => (this.selectedPet = value));
    console.log(this.selectedPet);
  }

  getPet() {
    console.log(this.petService.pet);
  }
}
