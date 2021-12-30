import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Objects/User';
import { UsersService } from 'src/app/global/services/users/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ami-fullstack-select-room',
  templateUrl: './select-room.component.html',
  styleUrls: ['./select-room.component.scss']
})
export class SelectRoomComponent implements OnInit {
  @Input() user :User;

  constructor(private users:UsersService, private router: Router) { 

  }
  
  ngOnInit(): void {
  }
  
  userSelectedCourse(course, user: User) {

    if(this.users.user1.sessionCounter > 0) this.users.user1.course = course;
    else if(this.users.user2.sessionCounter > 0) this.users.user2.course = course;
    else if(this.users.user3.sessionCounter > 0) this.users.user3.course = course;

    console.log(this.users.user1.course);
    console.log(this.users.user2.course);
    console.log(this.users.user3.course);
  }

}
