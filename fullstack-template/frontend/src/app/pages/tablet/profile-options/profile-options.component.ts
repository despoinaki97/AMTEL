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

  constructor(private users:UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  pickName() {
    console.log("trying to pick name")

    let username1 = document.getElementById("username1") as HTMLElement;
    let username2 = document.getElementById("username2") as HTMLElement;
    let username3 = document.getElementById("username3") as HTMLElement;

    if(this.users.user1.sessionCounter > 0) {
      username1.style.display = "block";
      username2.style.display = "none";
      username3.style.display = "none";
    }
    else if(this.users.user2.sessionCounter > 0) {
      username1.style.display = "none";
      username2.style.display = "block";
      username3.style.display = "none";
    }
    else if(this.users.user3.sessionCounter > 0) {
      username1.style.display = "none";
      username2.style.display = "none";
      username3.style.display = "block";
    }

  }

  pickImage() {
    console.log("trying to pick image")

    if(this.users.user1.sessionCounter > 0) return this.users.user1.photo;
    else if(this.users.user2.sessionCounter > 0) return this.users.user2.photo;
    else if(this.users.user3.sessionCounter > 0) return this.users.user3.photo;

    return;
  }

  

}
