import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  openWhiteboard() {
    console.log("Open whiteboard..")

    let wb = document.getElementById("whiteboard") as HTMLElement;
    wb.style.display = "block";
    let notes = document.getElementById("notes") as HTMLElement;
    notes.style.display = "none";

    let wbButton = document.getElementById("WhiteboardButton") as HTMLElement;
    wbButton.style.backgroundColor = "white";
    let notesButton = document.getElementById("NotesButton") as HTMLElement;
    notesButton.style.backgroundColor = "#B4CDED";
  }

  openNotes() {
    console.log("Open notes..")
    
    let notes = document.getElementById("notes") as HTMLElement;
    notes.style.display = "block";
    let wb = document.getElementById("whiteboard") as HTMLElement;
    wb.style.display = "none";

    let wbButton = document.getElementById("WhiteboardButton") as HTMLElement;
    wbButton.style.backgroundColor = "#B4CDED";
    let notesButton = document.getElementById("NotesButton") as HTMLElement;
    notesButton.style.backgroundColor = "white";
  }
  
  openProfileOptions() {
    let profileOp = document.getElementById("po") as HTMLElement;
    profileOp.style.display = "block";
  }

  ngOnInit() {
  }

}
