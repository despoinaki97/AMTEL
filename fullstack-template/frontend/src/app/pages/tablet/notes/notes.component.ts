import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Objects/User';
import { UsersService } from 'src/app/global/services/users/users.service';

@Component({
  selector: 'ami-fullstack-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  connectedUser :User;

  constructor(private users:UsersService) { 
    if(this.users.user1.sessionCounter > 0) this.connectedUser = users.user1;
    else if(this.users.user2.sessionCounter > 0) this.connectedUser = users.user2;
    else if(this.users.user3.sessionCounter > 0) this.connectedUser = users.user3;
  }

  ngOnInit() {
  }

  closeNotes() {
    let notes = document.getElementById("notes") as HTMLElement;
    notes.style.display = "none";
  }

  openNote2() {
    let note2 = document.getElementById("note2") as HTMLElement;
    note2.style.display = "block";
  }
  closeNote2() {
    let note2 = document.getElementById("note2") as HTMLElement;
    note2.style.display = "none";
  }

  openOnTable() {
    console.log("OpenOnTable");
  }
}
