import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/global/services/users/users.service';
import { User } from 'src/app/Objects/User';
import {Router} from '@angular/router';

@Component({
  selector: 'ami-fullstack-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.scss']
})
export class TabletComponent implements OnInit {

  user1 :User;
  user2:User;
  user3:User;

  constructor(private users:UsersService, private router: Router) {
    this.user1 = users.user1;
    this.user2 = users.user2;
    this.user3 = users.user3;
  }
  
  ngOnInit(): void {
  }
  
  onSubmit(event: any) {
    console.log("Trying to sign in with username:")
    console.log(event.target.uname.value);

    let wrongpass = document.getElementById("wpass") as HTMLElement;
    let inexuser = document.getElementById("inex") as HTMLElement;
    wrongpass.style.display = "none";
    inexuser.style.display = "none";

    if (event.target.uname.value == this.user1.name) {
      if(event.target.psw.value == this.user1.password) {
        this.users.user1.sessionCounter = this.users.user1.sessionCounter + 1;
        console.log("go to selectRoom.")
        this.router.navigate(['/selectRoom']);
      }
      else {
        console.log("Wrong password!")
        wrongpass.style.display = "block";
      }
    }
    else if (event.target.uname.value == this.user2.name) {
      if(event.target.psw.value == this.user2.password) {
        this.users.user2.sessionCounter = this.users.user2.sessionCounter + 1;
        console.log("go to selectRoom. ")
        this.router.navigate(['/selectRoom']);
      }
      else {
        console.log("Wrong password!")
        wrongpass.style.display = "block";
      }
    }
    else if (event.target.uname.value == this.user3.name) {
      if(event.target.psw.value == this.user3.password) {
        this.users.user3.sessionCounter = this.users.user3.sessionCounter + 1;
        console.log("go to selectRoom.")
        this.router.navigate(['/selectRoom']);
      }
      else {
        console.log("Wrong password!")
        wrongpass.style.display = "block";
      }
    }
    else {
      console.log("This user does not exist!")
      inexuser.style.display = "block";
    }
    console.log("sessioncounter:", this.users.user1.sessionCounter, 
    this.users.user2.sessionCounter, this.users.user3.sessionCounter)
    return event.target.uname.value;
  }

}