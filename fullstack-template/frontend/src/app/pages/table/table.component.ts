import { Component, OnInit } from '@angular/core';
import { transform } from 'lodash';
import { on } from 'process';
import { $ } from 'protractor';
import { SocketsService } from 'src/app/global/services';
import { UsersService } from 'src/app/global/services/users/users.service';
import {Lecture} from 'src/app/Objects/Lecture'
import { User } from 'src/app/Objects/User';
import { BubblemenuComponent } from 'src/app/pages/bubblemenu/bubblemenu.component';
declare const window:any
@Component({
  selector: 'my-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  bbmenu:BubblemenuComponent;
  bbmenu2:BubblemenuComponent;
  bbmenu3:BubblemenuComponent;

  globalparentid:string;

  user1 :User;
  user2:User;
  user3:User;
  public socketEvents:{event: string,message:any}[];

  constructor(private users:UsersService,private socketservice:SocketsService) { 
    this.socketEvents=[];
    this.user1 = users.user1;
    this.user2 = users.user2;
    this.user3 = users.user3;
    
    this.globalparentid='';

    this.bbmenu = new BubblemenuComponent();
    this.bbmenu2 = new BubblemenuComponent();
    this.bbmenu3 = new BubblemenuComponent();
   
  }

  closenote(){
    let note= document.getElementById("mynote");
    note.style.display ="none";
  }


  sharenote(){
    let shelement = document.getElementsByClassName("users")[0] as HTMLElement;
    if (shelement.style.display === "none") {
      shelement.style.display = "block";
    } else {
      shelement.style.display = "none";
    }
  }

  ngOnInit() {

    this.dragElement(document.getElementById("mynote"));


    this.socketservice.syncMessages("connecteduser").subscribe(msg=>{
      this.socketEvents.push(msg);
      console.log(msg);
      if(msg.message.userid == 1)
      {
        document.getElementById("user1").style.display="block";
        console.log(1);
      }
      if (msg.message.userid == 2){
        document.getElementById("user2").style.display="block";
        console.log(2);
      }
      if (msg.message.userid == 3){
        document.getElementById("user3").style.display="block";

        console.log(3);
      }
    })


    document.getElementById("slider").addEventListener('dblclick',function (){
      console.log("double click");
      let shelement = document.getElementsByClassName("slides-holder")[0] as HTMLElement;
      if (shelement.style.display === "none") {
        shelement.style.display = "flex";
      } else {
        shelement.style.display = "none";
      }
   });

    this.bbmenu.dragElement(document.getElementById("user1"));
      

    let user3elem = document.getElementById('user1');
    
    let despobutton = user3elem.children[0].getElementsByClassName("Despoina");
console.log(despobutton);
  
    //  user3elem.addEventListener('click',this.bbmenu3.openreactions);

   this.bbmenu2.dragElement(document.getElementById("user2"));
    //console.log(this.bbmenu);
    
    this.bbmenu3.dragElement(document.getElementById("user3"));

   


  
  
//    document.getElementById('minimenu').addEventListener('click',function (event){
//     event.stopPropagation();
//  });

  
}


 dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
   }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

}