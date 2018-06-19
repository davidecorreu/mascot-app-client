import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";

import { PetService } from "../pet.service";
import { Pet } from "../models/pet.model";
import { User } from "../models/user.model";

@Component({
  selector: "app-user",
  templateUrl: "./pets.component.html",
  styleUrls: ["./pets.component.scss"]
})
export class PetsComponent implements OnInit {
  pets: Pet[];
  user: User;
  dismissible = true;
  // type: String = "small";

  constructor(
    private modalService: BsModalService,
    private petService: PetService
  ) {}

  ngOnInit() {
    this.getPets();
  }

  // classType(): String {
  //   // let currentType = this.type;
  //   if (this.type === "large") this.type = "medium";
  //   else if (this.type === "medium") this.type = "small";
  //   else if (this.type === "small") this.type = "large";
  //   return this.type;
  // }

  getPets(): void {
    this.petService.getPets().subscribe(pets => {
      this.pets = pets.filter(i => i.available !== false);
    });
  }

  getPetName(pet): void {
    console.log(pet);
    this.petService.setSelectedPet(pet);
    this.petService.pet = pet;
  }
}
