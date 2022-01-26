import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Objects/User';

@Component({
  selector: 'ami-fullstack-bubblemenu',
  templateUrl: './bubblemenu.component.html',
  styleUrls: ['./bubblemenu.component.scss']
})
export class BubblemenuComponent implements OnInit {
  @Input() user :User;

  constructor() { 

  }


  // dragElement(elmnt) {
  //   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  //   if (document.getElementById(elmnt.id + "header")) {
  //     /* if present, the header is where you move the DIV from:*/
  //     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  //   } else {
  //     /* otherwise, move the DIV from anywhere inside the DIV:*/
  //     elmnt.onmousedown = dragMouseDown;
  //   }
  
  //   function dragMouseDown(e) {
  //     e = e || window.event;
  //     e.preventDefault();
  //     // get the mouse cursor position at startup:
  //     pos3 = e.clientX;
  //     pos4 = e.clientY;
  //     document.onmouseup = closeDragElement;
  //     // call a function whenever the cursor moves:
  //     document.onmousemove = elementDrag;
  //   }
  
  //   function elementDrag(e) {
  //     e = e || window.event;
  //     e.preventDefault();
  //     // calculate the new cursor position:
  //     pos1 = pos3 - e.clientX;
  //     pos2 = pos4 - e.clientY;
  //     pos3 = e.clientX;
  //     pos4 = e.clientY;
  //     // set the element's new position:
  //     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
  //     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  //   }
  
  //   function closeDragElement() {
  //     /* stop moving when mouse button is released:*/
  //     document.onmouseup = null;
  //     document.onmousemove = null;
  //   }
  // }

  openreactions(user: User){
    user = this.user;
    console.log(this.user);
    if(user.id == 1 ){
      console.log("despo");
      let reacts = document.getElementsByClassName(user.name)[0] as HTMLElement;
      reacts = reacts.getElementsByClassName("reactions")[0] as HTMLElement;
      if (reacts.style.display === "none") {
       reacts.style.display = "block";
     } else {
       reacts.style.display = "none";
     }
    }else if(user.id== 2){
      console.log("dim");
      let reacts = document.getElementsByClassName(user.name)[0] as HTMLElement;
      reacts = reacts.getElementsByClassName("reactions")[0] as HTMLElement;     
       if (reacts.style.display === "none") {
       reacts.style.display = "block";
     } else {
       reacts.style.display = "none";
     }
    }else{
      
      console.log("abd");
      let reacts = document.getElementsByClassName(user.name)[0] as HTMLElement;
      reacts = reacts.getElementsByClassName("reactions")[0] as HTMLElement;  
       if (reacts.style.display === "none") {
    reacts.style.display = "block";
  } else {
    reacts.style.display = "none";
  }
    }
   
  }


  raisehand(user:User){
   
    // let handparent = document.getElementsByName("raise-hand")[0] as HTMLElement;
    // let class_userid = handparent.className;
    // user = this.user;
    // console.log(this.user);
    // if(user.name == "Despoina" ){
      
    //   console.log(class_userid);
    //   let reacts = document.getElementsByClassName(user.name)[0] as HTMLElement;
    //   reacts.style.backgroundColor = '#61FF53';
     
    // }
  }


  ngOnInit() {
    if(this.user.id==1){
      let icons = document.getElementsByClassName('controlbut');
      let userimg = document.getElementsByClassName('userface')[0] as HTMLElement;
      userimg.style.transform = "rotate(90deg)";
     
      let icons0 = icons[0] as HTMLElement
      icons0.style.transform = "rotate(90deg)";
      let icons1 = icons[1] as HTMLElement
      icons1.style.transform = "rotate(90deg)";
      let icons2 = icons[2] as HTMLElement
      icons2.style.transform = "rotate(90deg)";
      let icons3 = icons[3] as HTMLElement
      icons3.style.transform = "rotate(90deg)";
      let icons4 = icons[4] as HTMLElement
      icons4.style.transform = "rotate(90deg)";
      let icons5 = icons[5] as HTMLElement
      icons5.style.transform = "rotate(90deg)";
    }
  }
}
