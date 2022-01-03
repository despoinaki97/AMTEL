import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Objects/User';
import { UsersService } from 'src/app/global/services/users/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ami-fullstack-profile-options',
  templateUrl: './profile-options.component.html',
  styleUrls: ['./profile-options.component.scss']
})
export class ProfileOptionsComponent implements OnInit {

  connectedUser :User;

  constructor(private users:UsersService) { 
    if(this.users.user1.sessionCounter > 0) this.connectedUser = users.user1;
    else if(this.users.user2.sessionCounter > 0) this.connectedUser = users.user2;
    else if(this.users.user3.sessionCounter > 0) this.connectedUser = users.user3;
  }
 
  ngOnInit(): void {
  }

  pickImage() {

    if(this.users.user1.sessionCounter > 0) return this.users.user1.photo;
    else if(this.users.user2.sessionCounter > 0) return this.users.user2.photo;
    else if(this.users.user3.sessionCounter > 0) return this.users.user3.photo;

    return;
  }


  closeProfileOptions() {
    let profileOptions = document.getElementById("po") as HTMLElement;
    profileOptions.style.display = "none";
  }

  logout() {

    if(this.users.user1.sessionCounter > 0) {
      this.users.user1.course = 0;
      this.users.user1.sessionCounter = 0;
    }
    else if(this.users.user2.sessionCounter > 0) {
      this.users.user2.course = 0;
      this.users.user2.sessionCounter = 0;
    }
    else if(this.users.user3.sessionCounter > 0) {
      this.users.user3.course = 0;
      this.users.user3.sessionCounter = 0;
    }
    
  }

  openNotes() {
    console.log("Open notes");
    let notes = document.getElementById("notes") as HTMLElement;
    notes.style.display = "block";
  }

}
