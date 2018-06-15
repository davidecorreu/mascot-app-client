import { Component, OnInit } from "@angular/core";

import { PetService } from "../pet.service";
import { Pet } from "../models/pet.model";
import { User } from "../models/user.model";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  pets: Pet[];
  user: User;
  dismissible = true;

  markAsRead(dismissedAlert: any, user: any): void {
    this.user.messages = this.user.messages.filter(
      alert => alert !== dismissedAlert
    );
    this.petService
      .markAsRead(dismissedAlert._id, user._id)
      .subscribe(
        data => console.log("data", data),
        error => console.log("error", error)
      );
  }

<<<<<<< HEAD
  constructor(private petService: PetService) { }
=======
  constructor(private petService: PetService) {}
>>>>>>> feat/letsee

  ngOnInit() {
    this.getPets();
    this.getUser();
  }

  getPets(): void {
<<<<<<< HEAD
    this.petService.getPets()
      .subscribe(pets => {
        this.pets = pets.filter(i => i.available !== false)
      });
  }

  getUser(): void {
    const id = '5b228ce9f0e8b16860cc9941';
    this.petService.getUser(id)
      .subscribe(user => this.user = user)
=======
    this.petService.getPets().subscribe(pets => {
      this.pets = pets.filter(i => i.available !== false);
    });
  }

  getUser(): void {
    const id = "5b228d2439c7f42eb1a55dfd";
    this.petService.getUser(id).subscribe(user => (this.user = user));
>>>>>>> feat/letsee
  }

  read(): void {
    console.log(this.user);
  }
}
