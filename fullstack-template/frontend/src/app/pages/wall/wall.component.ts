import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketsService } from 'src/app/global/services';

@Component({
  selector: 'ami-fullstack-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {
  public socketEvents:{event: string,message:any}[];
  constructor(private socketservice:SocketsService,private router:Router) {
    this.socketEvents=[];
   }

  ngOnInit() {
    this.socketservice.syncMessages("sharecontent").subscribe(msg=>{
      this.socketEvents.push(msg);
      console.log(msg);
      this.router.navigate(['/wall_sharing']);

    })
  }

}
