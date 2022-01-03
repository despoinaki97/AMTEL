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

    this.user1=new User(1,this.currphoto,"Despoina","demo1",0,0,["HY469-22/10/21","HY469-Introduction",
    "HY469-Course material","HY469, About project","HY508, Paper proposal","HY469, Final exams"]);
    this.user2=new User(2,this.currphoto2,"Dimitra","demo2",0,0, ["HY577-22/10/21","HY469-Introduction",
    "HY577-Course material","HY577, About project","HY508, Paper proposal","HY577, Final exams"]);
    this.user3=new User(3,this.currphoto3,"Abdul","demo3",0,0, ["HY360-22/10/21","HY469-Introduction",
    "HY360-Course material","HY360, About project","HY508, Paper proposal","HY360, Final exams"]);
   }

}
