import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { UsersService } from 'src/app/global/services/users/users.service';

@Component({
  selector: 'ami-fullstack-tv-empty',
  templateUrl: './tv-empty.component.html',
  styleUrls: ['./tv-empty.component.scss']
})
export class TvEmptyComponent implements OnInit {
  course:string;
  constructor(private users:UsersService,private Socket:SocketsService) { }

  ngOnInit() {
        
       this.course="HY469 Room"
  }

  // public userconnected(user,course){
  //   this.users.connectedUser(user,course).subscribe();
  // }

}
