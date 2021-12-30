import { Injectable } from '@angular/core';
import { User } from 'src/app/Objects/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user1:User;
  user2:User;
  user3:User;
  currphoto = '../../../assets/Despoina.jpg';
  currphoto2= '../../../assets/dimitra.jpg';
  currphoto3= '../../../assets/HC.jpg';
  
  constructor() {

    this.user1=new User(1,this.currphoto,"Despoina","demo1",0,0);
    this.user2=new User(2,this.currphoto2,"Dimitra","demo2",0,0);
    this.user3=new User(3,this.currphoto3,"Abdul","demo3",0,0);
   }

}
