import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketsService } from '../global/services';

@Component({
  selector: 'ami-fullstack-wall-start',
  templateUrl: './wall-start.component.html',
  styleUrls: ['./wall-start.component.scss']
})
export class WallStartComponent implements OnInit {
  public socketEvents:{event: string,message:any}[];

  constructor(private socketservice:SocketsService,private router:Router) { 
    this.socketEvents=[];
  }

  ngOnInit() {
    this.socketservice.syncMessages("connecteduser").subscribe(msg=>{
      this.socketEvents.push(msg);
      console.log(msg);
      this.router.navigate(['/wall']);
  })
}
}
