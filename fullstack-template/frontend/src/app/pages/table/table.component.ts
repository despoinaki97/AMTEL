import { Component, OnInit } from '@angular/core';
import { transform } from 'lodash';
import { on } from 'process';
import { $ } from 'protractor';
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

  constructor(private users:UsersService) { 
    this.user1 = users.user1;
    this.user2 = users.user2;
    this.user3 = users.user3;
    
    this.globalparentid='';

    this.bbmenu = new BubblemenuComponent();
    this.bbmenu2 = new BubblemenuComponent();
    this.bbmenu3 = new BubblemenuComponent();
   
  }



  ngOnInit() {

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


}