import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketsService } from 'src/app/global/services';

@Component({
  selector: 'ami-fullstack-wall-sharing',
  templateUrl: './wall-sharing.component.html',
  styleUrls: ['./wall-sharing.component.scss']
})
export class WallSharingComponent implements OnInit {
  public socketEvents:{event: string,message:any}[];

  constructor(private socketservice:SocketsService,private router:Router) { 
    this.socketEvents=[];

  }

  ngOnInit() {
    this.socketservice.syncMessages("closecontent").subscribe(msg=>{
      this.socketEvents.push(msg);
      console.log(msg);
      if(msg.message.device=="Wall"){
        this.router.navigate(['/wall']);

      }
    })
  }

}
