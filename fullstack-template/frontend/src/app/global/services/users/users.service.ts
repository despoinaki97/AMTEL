import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Objects/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private hostURI:string;
  user1:User;
  user2:User;
  user3:User;
  currphoto = '../../../assets/Despoina.jpg';
  currphoto2= '../../../assets/dimitra.jpg';
  currphoto3= '../../../assets/HC.jpg';
  res:Response;
  constructor(private http:HttpClient) {
    this.hostURI=environment.host;

    this.user1=new User(1,this.currphoto,"Despoina","demo1",0,0);
    this.user2=new User(2,this.currphoto2,"Dimitra","demo2",0,0);
    this.user3=new User(3,this.currphoto3,"Abdul","demo3",0,0);
   }

   public connecteduser(userid,course){
    console.log("mpaineis?");
    return this.http.post(`${this.hostURI}/api/example/connecteduser`,
    {
      message:{
        userid:userid,
        course:course
      },
      event:"connecteduser"
    })

  }

  public sharecontent(place,device){
    console.log("mpaineis?");
    return this.http.post(`${this.hostURI}/api/example/sharecontent`,
    {
      message:{
        place:place,
        device:device
      },
      event:"sharecontent"
    })

  }


  // public getconnecteduser(){
  //   return this.http.get(`${this.hostURI}/api/example/getconnecteduser`);
  // }

}
