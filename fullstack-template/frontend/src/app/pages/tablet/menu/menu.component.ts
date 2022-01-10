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

  openChat() {
    let wb = document.getElementById("whiteboard") as HTMLElement;
    wb.style.display = "none";
    let notesimage = document.getElementById("notesimage") as HTMLElement;
    notesimage.style.display = "none";
    let save = document.getElementById("save") as HTMLElement;
    save.style.display = "none";
    let navop = document.getElementById("navop") as HTMLElement;
    navop.style.display = "none";
    let ham = document.getElementById("ham") as HTMLElement;
    ham.style.display = "none";
    let chat = document.getElementById("chat") as HTMLElement;
    chat.style.display = "none";
    let chatWindow = document.getElementById("chatWindow") as HTMLElement;
    chatWindow.style.display = "block";
  }

  closeChat() {
    let notesimage = document.getElementById("notesimage") as HTMLElement;
    notesimage.style.display = "block";
    let save = document.getElementById("save") as HTMLElement;
    save.style.display = "block";
    let navop = document.getElementById("navop") as HTMLElement;
    navop.style.display = "block";
    let ham = document.getElementById("ham") as HTMLElement;
    ham.style.display = "block";
    let chat = document.getElementById("chat") as HTMLElement;
    chat.style.display = "block";
    let chatWindow = document.getElementById("chatWindow") as HTMLElement;
    chatWindow.style.display = "none";
  }


  ngOnInit() {
  }

}
