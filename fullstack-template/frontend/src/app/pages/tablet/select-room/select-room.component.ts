import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Objects/User';
import { UsersService } from 'src/app/global/services/users/users.service';
import {Router} from '@angular/router';
import { SocketsService } from 'src/app/global/services';

@Component({
  selector: 'ami-fullstack-select-room',
  templateUrl: './select-room.component.html',
  styleUrls: ['./select-room.component.scss']
})
export class SelectRoomComponent implements OnInit {
  @Input() user :User;

  public socketEvents:{event: string,message:any}[];
  constructor(private users:UsersService, private router: Router,private socketservice:SocketsService) { 
    this.socketEvents=[];
  }
  
  ngOnInit(): void {
    this.socketservice.syncMessages("connecteduser").subscribe(msg=>{this.socketEvents.push(msg);
    })
  }
  
  userSelectedCourse(course, user: User) {

    if(this.users.user1.sessionCounter > 0) {
      this.users.user1.course = course;
      this.connuser(this.users.user1.id, this.users.user1.course);
    }
    else if(this.users.user2.sessionCounter > 0){
      this.users.user2.course = course;
      this.connuser(this.users.user2.id, this.users.user1.course);

    } 
    else if(this.users.user3.sessionCounter > 0){
      this.users.user3.course = course;
      this.connuser(this.users.user3.id, this.users.user1.course);

    } 
    

    console.log(this.users.user1.course);
    console.log(this.users.user2.course);
    console.log(this.users.user3.course);
  }

  public connuser(userid,course){
    this.users.connecteduser(userid,course).subscribe();

  }

}
