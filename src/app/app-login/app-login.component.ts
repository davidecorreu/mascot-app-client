import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
  userData = null;
  messages = null;
  toggle = true;
  constructor(private petService: PetService) { }

  ngOnInit() {
  }

  showUserMessages() {
    this.toggle = !this.toggle;
    if (!this.toggle) {
      this.petService.getUser(this.petService.currentUser.id)
      .subscribe( userData => {
        console.log('userData:', userData)
        this.userData = userData;
        this.messages = userData.messages;
      })
    }
  }

}
