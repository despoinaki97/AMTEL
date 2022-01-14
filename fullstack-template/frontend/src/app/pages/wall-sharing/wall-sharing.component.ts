import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketsService } from 'src/app/global/services';
import { LeapService,Gestures } from 'src/app/global/services/LeapMotion/leap-service/leap.service';
@Component({
  selector: 'ami-fullstack-wall-sharing',
  templateUrl: './wall-sharing.component.html',
  styleUrls: ['./wall-sharing.component.scss']
})
export class WallSharingComponent implements OnInit {
  slideIndex:any;
  public socketEvents:{event: string,message:any}[];
  constructor(private socketservice:SocketsService,private router:Router,private _leapService:LeapService) { 
    this.socketEvents=[];
    this.slideIndex =0;
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  
  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";  
    }

    (slides[this.slideIndex-1] as HTMLElement).style.display = "block";  
  }

  ngOnInit() {

    this.showSlides(this.slideIndex);
    
    var sub = this._leapService.gestureRecognizer().subscribe((gesture)=>{
      if(gesture == Gestures.SWIPE_LEFT){
        console.log('swipe left tv');
        this.plusSlides(1);
      }
      if(gesture == Gestures.SWIPE_RIGHT){
        console.log('swipe left tv');
        this.plusSlides(-1);
      }
    });

    this.socketservice.syncMessages("closecontent").subscribe(msg=>{
      this.socketEvents.push(msg);
      console.log(msg);
      if(msg.message.device=="Wall"){
        this.router.navigate(['/wall']);

      }
    })
  }

}
