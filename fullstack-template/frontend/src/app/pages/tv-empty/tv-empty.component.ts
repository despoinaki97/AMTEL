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
  currcourse:string;
  public socketEvents:{event: string,message:any}[];

  constructor(private users:UsersService,private Socket:SocketsService) { 
    this.socketEvents=[];

  }
  ngOnInit() {
    this.Socket.syncMessages("connecteduser").subscribe(msg=>{
      this.socketEvents.push(msg);
      console.log(msg);
        if(this.currcourse!=null && msg.message.course !=this.currcourse )
        {
          this.course="HY-" + this.currcourse + " Room";
        }
        else if(this.currcourse == null){  
          this.currcourse = msg.message.course;
          this.course="HY-" + msg.message.course+ " Room";
        }


        console.log(this.course);
    })  }

}
