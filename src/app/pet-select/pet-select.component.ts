import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

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
    console.log(this.id, "IDDDDDDD");
    this.petService.getPet(this.id).subscribe(pet => (this.pet = pet));
    console.log(this.pet);
  }

  showPet(): void {
    console.log(this.pet);
  }
}
