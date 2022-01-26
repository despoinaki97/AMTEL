import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/global/services/users/users.service';
import { Lecture } from 'src/app/Objects/Lecture';
import { User } from 'src/app/Objects/User';
import { Week } from 'src/app/Objects/Week';
declare const window:any

@Component({
  selector: 'ami-fullstack-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  toggle = true;
  status = 'Enable'; 
  toggle1 = true;
  status1 = 'Enable'; 
  sharplace:any;
  sharedevice:any;
  lectureslist:Lecture[];
  olids:number[];
  flagopenedlecture:boolean;
  shareplace:string;
  weeks: Week[];
  constructor(private users:UsersService) {
    this.shareplace=null;
    this.sharedevice=null;
    this.flagopenedlecture=false;

    this.olids=[];

    this.lectureslist=[
      {id:0,title:"Tutorial on Project"},
      {id:1,title:"Multimodal Interaction and Intelligent Interfaces"},
      {id:2,title:"Interface Design for Mobile and Wearable Devices, Automoblies and the New Media"}
    ]
    this.weeks=[
      {lectures:this.lectureslist,photo:"../../../assets/week1.png"},
      {lectures:this.lectureslist,photo:"../../../assets/week2.png"},
      {lectures:this.lectureslist,photo:"../../../assets/week3.png"},
      {lectures:this.lectureslist,photo:"../../../assets/week4.png"},
      {lectures:this.lectureslist,photo:"../../../assets/week5.png"},
      {lectures:this.lectureslist,photo:"../../../assets/week6.png"},
      {lectures:this.lectureslist,photo:"../../../assets/week7.png"},
      {lectures:this.lectureslist,photo:"../../../assets/week8.png"},
      {lectures:this.lectureslist,photo:"../../../assets/week9.png"},
      {lectures:this.lectureslist,photo:"../../../assets/week10.png"},
      {lectures:this.lectureslist,photo:"../../../assets/week11.png"}

    ]

    // this.weeks.forEach(element => {
    //   console.log(element.lectures, element.photo);
    // });

  }






  openLectures(id:number){
    // console.log("opened" + id);
    let lects = document.getElementsByClassName('lectures')[id] as HTMLElement;
    if (lects.style.display === "none") {
      lects.style.display = "block";
      console.log("opened" + id);
    } else {
      lects.style.display = "none";
      console.log("closed" + id);
    }
  }


  // chooseLecture(id:number,parentid:number){
  //   console.log(id,parentid);

  // }
  
  chooseLecture(id:number,parentid:number){
        console.log(id,parentid);

    // if (parentid!=this.globalparentid){
    //   while(this.olids != null)
    //   this.olids.pop();
    //   this.globalparentid = parentid;
    // }
    console.log("choose" + id);
    var imgid = 'lectureImage' + id;
    var mydivid='mydiv' + id;

     let parent = document.getElementsByClassName("slides-holder__item")[parentid] as HTMLElement;
   if(this.flagopenedlecture == false){
      var lecimg = parent.getElementsByClassName(imgid)[0] as HTMLImageElement;
      lecimg.src = "../../../assets/Rectangle 4.png";
      this.flagopenedlecture = true;
      var divid = parent.getElementsByClassName(mydivid)[0] as HTMLElement;
      divid.style.cssText='background-color: #f1f1f1;text-align: center;border: 1px solid #d3d3d3;'; 
      
      // (parent.getElementsByClassName(mydivid)[0] as HTMLElement).style.cssText='background-color: #f1f1f1;text-align: center;border: 1px solid #d3d3d3;'
      // lecimg.style.paddingBottom ="18%";
      // lecimg.style.paddingTop ="18%";
      this.olids.push(id);
     
    }else{
      this.olids.forEach(element => {
        var elementmix = 'lectureImage' + element;
        var mydivmix='mydiv' + element;
        var lecimgpop = parent.getElementsByClassName(elementmix)[0] as HTMLImageElement;
        lecimgpop.src = "../../../assets/Rectangle 6.png";
        let mdmix = parent.getElementsByClassName(mydivmix)[0] as HTMLElement
        mdmix.style.display='none';

        this.olids.pop();
        console.log(elementmix);
      });
      var lecimg = parent.getElementsByClassName(imgid)[0] as HTMLImageElement;
      lecimg.src = "../../../assets/Rectangle 4.png";
     
      var divid = parent.getElementsByClassName(mydivid)[0] as HTMLElement;
      divid.style.cssText='background-color: #f1f1f1;text-align: center;border: 1px solid #d3d3d3;'; 
      
      this.olids.push(id);
    
    } 
    
    
  }


  chooseshare(share:string){
    console.log(share);
    this.shareplace=share;
  }

  chooseplace(place:string){
    console.log(place);
    this.sharedevice=place;

  }

  closelecture(){
     this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    if(this.sharedevice!=null && this.shareplace!=null){
        console.log('close share');
        this.users.closecontent(this.shareplace,this.sharedevice).subscribe();
      
    }


  }

  sharelecture(){
    this.toggle1 = !this.toggle1;
    this.status1 = this.toggle1 ? 'Enable' : 'Disable';
    if(this.sharedevice!=null && this.shareplace!=null){
        console.log('ready to share');
        this.users.sharecontent(this.shareplace,this.sharedevice).subscribe();
      
    }


  }

  // ngOnInit() {
 
  // }

  ngOnInit(){	
    let leccollect =  document.getElementsByClassName('lectures');
    for(let i =0;i<leccollect.length;i++){
       leccollect[i].addEventListener('click',function (event){
         event.stopPropagation();
      });
     
    }
    
    // let mmenuch =  document.getElementsByClassName('minimenuchild');
    // for(let i =0;i<mmenuch.length;i++){
    //   mmenuch[i].addEventListener('click',function (event){
    //      event.stopPropagation();
    //   });
     
    // }

   
   
  //   ( function() {
  //     'use strict';
  
  //     function startSetup( sliderSize, slideSize, animationDuration, autoplayInterval ) {
  
  //         this.sliderSize        = parseFloat( sliderSize )/100;
  //         this.slideSize         = parseFloat( slideSize )/100;
  //         this.animationDuration = parseFloat( animationDuration );
  //         this.autoplayInterval  = parseFloat( autoplayInterval );
  
  //     };
  
  //     function Slider( newSlider, sliderSize, slideSize, animationDuration, autoplayInterval ) {
  
  //         newSlider = document.getElementById('slider');

  //         this.startSetup           = new startSetup( sliderSize, slideSize, animationDuration, autoplayInterval ),
  
  //         this.wrapper              = newSlider.querySelector( '.wrapper' );
  
  //         this.slides               = newSlider.querySelectorAll( '.circular-slider .wrapper .slides-holder .slides-holder__item' );
  
  //         this.slidesSize           = 0;
  
  //         // this.descriptionsHolder   = newSlider.querySelector( '.circular-slider .wrapper .descriptions' );
  
  //         // this.descriptions         = newSlider.querySelectorAll( '.circular-slider .wrapper .descriptions .descriptions__item' );
  
  //         this.slidesHolder         = newSlider.querySelector( '.circular-slider .wrapper .slides-holder' );
  
  //         this.btnLeft              = newSlider.querySelector( '.circular-slider .wrapper .controls .controls__left' );
  
  //         this.btnRight             = newSlider.querySelector( '.circular-slider .wrapper .controls .controls__right' );
  
  //         // this.btnAutoplay          = newSlider.querySelector( '.circular-slider .wrapper .controls .controls__autoplay' );
  
  //         this.currentAngle         = 0;
  
  //         this.stepAngle            = 2*Math.PI/newSlider.querySelectorAll( '.circular-slider .wrapper .slides-holder .slides-holder__item' ).length;
  
  //         this.currentSlide         = 0;
  
  //         this.slidesHolder.style.transitionDuration = this.startSetup.animationDuration + 'ms';
  //         this.onResize();
  //         // this.setAutoplay();
  //         this.setNav();
  //         this.addStyle();
  
  //         let _this = this;
  //         // this.btnAutoplay.onclick = function() {
  
  //         //     if( this.classList.contains( 'controls__autoplay_running' ) ) {
          
  //         //         this.classList.remove( 'controls__autoplay_running' );
  //         //         this.classList.add( 'controls__autoplay_paused' );
  //         //         clearInterval( _this.autoplay );
  //         //         _this.autoplay = null;
          
  //         //     } else {
          
  //         //         this.classList.remove( 'controls__autoplay_paused' );
  //         //         this.classList.add( 'controls__autoplay_running' );
  //         //         _this.setAutoplay(); 
      
  //         //     }
      
  //         // }
  
  //     };
  
  //     Slider.prototype.onResize = function() {
  
  //         let radius,
  //             w = this.wrapper.parentNode.getBoundingClientRect().width,
  //             h = this.wrapper.parentNode.getBoundingClientRect().height;
  
  //         2*h <= w ? radius = h*this.startSetup.sliderSize
  //                  : radius = ( w/2 )*this.startSetup.sliderSize;
  
  //         this.setSize( Math.round( radius ) );
  
  //     };
  
  //     Slider.prototype.setSize = function( radius ) {
  
  //         // this.wrapper.style.width  = 2*radius + 'px';
  //         // this.wrapper.style.height = radius + 'px';
  //         this.wrapper.style.width='100%';
  //         this.wrapper.style.height='100%';
  //         let r                         = 2*radius*( 1 - this.startSetup.slideSize );
  //         this.slidesHolder.style.width = this.slidesHolder.style.height = r + 'px';
  //         this.slidesRepositioning( r/2 );
  
  //         this.slidesHolder.style.marginTop    = radius*this.startSetup.slideSize  + 'px';
  //         // this.descriptionsHolder.style.width  = ( r/2 - r*this.startSetup.slideSize + 20)*2 + 'px';
  //         // this.descriptionsHolder.style.height = r/2 - r*this.startSetup.slideSize + 20 + 'px';
  
  //         this.slidesSize                        = Math.min( 2*radius*this.startSetup.slideSize, this.stepAngle*radius*( 1 - this.startSetup.slideSize ) - 50 );
  //         // this.descriptionsHolder.style.fontSize = window.innerHeight < window.innerWidth ? '1.2vh'
  //                                                                                         // :  '1.2vw';
  //         for( let i = 0; i < this.slides.length; i++ ) {
  //             this.slides[i].style.width = this.slides[i].style.height = this.slidesSize + 'px';
  //         };
  
  //     };
  
  //     Slider.prototype.slidesRepositioning = function( r ) {
  
  //         for( let i = 0; i < this.slides.length; i++ ) {
  
  //             let x = r*Math.cos( this.stepAngle*i - Math.PI/2 ),
  //                 y = r*Math.sin( this.stepAngle*i - Math.PI/2 );
  //             this.slides[i].style.transform = 'translate( ' + x  + 'px, ' + y + 'px ) rotate( ' + this.stepAngle*180/Math.PI*i + 'deg )';
  
  //         };
  
  //     };
  
  //     Slider.prototype.rotate = function( multiplier ) {
  
  //         let _this = this;
  
  //         this.removeStyle();
  //         this.resetNavs();
  
  //         if( this.currentSlide === this.slides.length - 1  && multiplier === -1 ) {
  
  //             this.slidesHolder.style.transform     = 'rotate( -360deg )';
  //             this.currentSlide = this.currentAngle = 0;
  //             this.addStyle();
  
  //             setTimeout( function(){
  
  //                 _this.slidesHolder.style.transitionDuration = 0 + 's';
  //                 _this.slidesHolder.style.transform          = 'rotate( ' + _this.currentAngle + 'deg )';
  //                 setTimeout( function() { _this.slidesHolder.style.transitionDuration = _this.startSetup.animationDuration + 'ms'; }, 20 );
  
  //             }, this.startSetup.animationDuration );
  
  //         } else if ( this.currentSlide === 0 && multiplier === 1 ) {
  
  //             this.slidesHolder.style.transform = 'rotate( ' + this.stepAngle*180/Math.PI + 'deg )';
  //             this.currentSlide                 = _this.slides.length - 1;
  //             this.currentAngle                 = -( 2*Math.PI - _this.stepAngle )*180/Math.PI;
  //             this.addStyle();
  
  //             setTimeout( function(){
  
  //                 _this.slidesHolder.style.transitionDuration = 0 + 's';
  //                 _this.slidesHolder.style.transform = 'rotate( ' + _this.currentAngle + 'deg )';
  //                 setTimeout( function() { _this.slidesHolder.style.transitionDuration = _this.startSetup.animationDuration + 'ms'; }, 20 );
  
  //             }, this.startSetup.animationDuration );
  
  //         } else {
  
  //             this.currentSlide                -= multiplier;
  //             this.currentAngle                += ( this.stepAngle*180/Math.PI )*multiplier;
  //             this.slidesHolder.style.transform = 'rotate( ' + this.currentAngle + 'deg )';
  //             this.addStyle();
  
  //         };
  
  //     };
  
  //     Slider.prototype.setNav = function() {
  
  //         let _this              = this;
  //         _this.btnLeft.onclick  = function() { _this.rotate(1) };
  //         _this.btnRight.onclick = function() { _this.rotate(-1) };
  
  //     };
  
  //     Slider.prototype.disableNav = function() {
  
  //         this.btnLeft.onclick  = null;
  //         this.btnRight.onclick = null;
  
  //     };
  
  //     Slider.prototype.setAutoplay = function() {
  //         let _this     = this;
  //         this.autoplay = setInterval( function() { _this.rotate(-1) }, _this.startSetup.autoplayInterval + 20 ); 
  //     };
  
  //     Slider.prototype.removeStyle = function() {
  
  //         let x = this.currentSlide;
  
  //         // this.descriptions[x].classList.remove( 'descriptions__item_visible' );
  //         this.slides[x].classList.remove( 'slides-holder__item_active' );
  //         this.slides[x].style.height = this.slides[x].style.width = this.slidesSize + 'px';
  
  //     };
  
  //     Slider.prototype.addStyle = function() {
  
  //         let x = this.currentSlide;
  
  //         // this.descriptions[x].classList.add( 'descriptions__item_visible' );
  //         this.slides[x].classList.add( 'slides-holder__item_active' );
  //         this.slides[x].style.height = this.slides[x].style.width = this.slidesSize + 20 + 'px';
  
  //     };
  
  //     Slider.prototype.resetNavs = function() {
  
  //         let _this = this;
  
  //         this.disableNav();
  //         setTimeout( function(){ _this.setNav() }, this.startSetup.animationDuration + 20 );
  //         if ( this.autoplay != null ) {
  //             clearInterval( this.autoplay );
  //             this.setAutoplay();
  //         };
  
  //     };
  
  //     ///////////Init sliders/////////// 
  //     window.circularSlider1 = new Slider( document.querySelector( '.circular-slider-1' ), 55, 20, 600, 2500 );
  //      console.log('slide');
    
  //     let sliders = [ window.circularSlider1];
   
  //     window.onresize = function() {
  
  //         for ( let i = 0; i < sliders.length; i++ ){
  
  //             sliders[i].resetNavs();
  //             sliders[i].onResize();
  
  //         };
  
  //     };
   
    


  // } )();
  // //
  

  ( function() {
    'use strict';

    function startSetup( sliderSize, slideSize, animationDuration, autoplayInterval ) {

        this.sliderSize        = parseFloat( sliderSize )/100;
        this.slideSize         = parseFloat( slideSize )/100;
        this.animationDuration = parseFloat( animationDuration );
        this.autoplayInterval  = parseFloat( autoplayInterval );

    };

    function Slider( newSlider, sliderSize, slideSize, animationDuration, autoplayInterval ) {

      newSlider= document.getElementById('slider');

        this.startSetup           = new startSetup( sliderSize, slideSize, animationDuration, autoplayInterval ),

        this.wrapper              = newSlider.querySelector( '.wrapper' );

        this.slides               = newSlider.querySelectorAll( '.circular-slider .wrapper .slides-holder .slides-holder__item' );

        this.slidesSize           = 0;

        this.descriptionsHolder   = newSlider.querySelector( '.circular-slider .wrapper .descriptions' );

        this.descriptions         = newSlider.querySelectorAll( '.circular-slider .wrapper .descriptions .descriptions__item' );

        this.slidesHolder         = newSlider.querySelector( '.circular-slider .wrapper .slides-holder' );

        this.btnLeft              = newSlider.querySelector( '.circular-slider .wrapper .controls .controls__left' );

        this.btnRight             = newSlider.querySelector( '.circular-slider .wrapper .controls .controls__right' );

        // this.btnAutoplay          = newSlider.querySelector( '.circular-slider .wrapper .controls .controls__autoplay' );

        this.currentAngle         = 0;

        this.stepAngle            = 2*Math.PI/newSlider.querySelectorAll( '.circular-slider .wrapper .slides-holder .slides-holder__item' ).length;

        this.currentSlide         = 0;

        this.slidesHolder.style.transitionDuration = this.startSetup.animationDuration + 'ms';
        this.onResize();
        // this.setAutoplay();
        this.setNav();
        this.addStyle();

        let _this = this;
        // this.btnAutoplay.onclick = function() {

        //     if( this.classList.contains( 'controls__autoplay_running' ) ) {
        
        //         this.classList.remove( 'controls__autoplay_running' );
        //         this.classList.add( 'controls__autoplay_paused' );
        //         clearInterval( _this.autoplay );
        //         _this.autoplay = null;
        
        //     } else {
        
        //         this.classList.remove( 'controls__autoplay_paused' );
        //         this.classList.add( 'controls__autoplay_running' );
        //         _this.setAutoplay(); 
    
        //     }
    
        // }

    };

    Slider.prototype.onResize = function() {

        let radius,
            w = this.wrapper.parentNode.getBoundingClientRect().width,
            h = this.wrapper.parentNode.getBoundingClientRect().height;

        2*h <= w ? radius = h*this.startSetup.sliderSize
                 : radius = ( w/2 )*this.startSetup.sliderSize;

        this.setSize( Math.round( radius ) );

    };

    Slider.prototype.setSize = function( radius ) {

        // this.wrapper.style.width  = 2*radius + 'px';
        // this.wrapper.style.height = radius + 'px';

        this.wrapper.style.width  = '1920px';
        this.wrapper.style.height = '1073px';

        let r                         = 2*radius*( 1 - this.startSetup.slideSize );
        this.slidesHolder.style.width = this.slidesHolder.style.height = r + 'px';
        this.slidesRepositioning( r/2 );

        this.slidesHolder.style.marginTop    = radius*this.startSetup.slideSize + 'px';
        // this.descriptionsHolder.style.width  = ( r/2 - r*this.startSetup.slideSize + 20)*2 + 'px';
        // this.descriptionsHolder.style.height = r/2 - r*this.startSetup.slideSize + 20 + 'px';

        this.slidesSize                        = Math.min( 2*radius*this.startSetup.slideSize, this.stepAngle*radius*( 1 - this.startSetup.slideSize ) - 50 );
        // this.descriptionsHolder.style.fontSize = window.innerHeight < window.innerWidth ? '1.2vh':  '1.2vw';
        for( let i = 0; i < this.slides.length; i++ ) {
            this.slides[i].style.width = this.slides[i].style.height = this.slidesSize + 'px';
        };

    };

    Slider.prototype.slidesRepositioning = function( r ) {

        for( let i = 0; i < this.slides.length; i++ ) {

            let x = r*Math.cos( this.stepAngle*i - Math.PI/2 ),
                y = r*Math.sin( this.stepAngle*i - Math.PI/2 );
            this.slides[i].style.transform = 'translate( ' + x  + 'px, ' + y + 'px ) rotate( ' + this.stepAngle*180/Math.PI*i + 'deg )';

        };

    };

    Slider.prototype.rotate = function( multiplier ) {

        let _this = this;

        this.removeStyle();
        this.resetNavs();

        if( this.currentSlide === this.slides.length - 1  && multiplier === -1 ) {

            this.slidesHolder.style.transform     = 'rotate( -360deg )';
            this.currentSlide = this.currentAngle = 0;
            this.addStyle();

            setTimeout( function(){

                _this.slidesHolder.style.transitionDuration = 0 + 's';
                _this.slidesHolder.style.transform          = 'rotate( ' + _this.currentAngle + 'deg )';
                setTimeout( function() { _this.slidesHolder.style.transitionDuration = _this.startSetup.animationDuration + 'ms'; }, 20 );

            }, this.startSetup.animationDuration );

        } else if ( this.currentSlide === 0 && multiplier === 1 ) {

            this.slidesHolder.style.transform = 'rotate( ' + this.stepAngle*180/Math.PI + 'deg )';
            this.currentSlide                 = _this.slides.length - 1;
            this.currentAngle                 = -( 2*Math.PI - _this.stepAngle )*180/Math.PI;
            this.addStyle();

            setTimeout( function(){

                _this.slidesHolder.style.transitionDuration = 0 + 's';
                _this.slidesHolder.style.transform = 'rotate( ' + _this.currentAngle + 'deg )';
                setTimeout( function() { _this.slidesHolder.style.transitionDuration = _this.startSetup.animationDuration + 'ms'; }, 20 );

            }, this.startSetup.animationDuration );

        } else {

            this.currentSlide                -= multiplier;
            this.currentAngle                += ( this.stepAngle*180/Math.PI )*multiplier;
            this.slidesHolder.style.transform = 'rotate( ' + this.currentAngle + 'deg )';
            this.addStyle();

        };

    };

    Slider.prototype.setNav = function() {

        let _this              = this;
        _this.btnLeft.onclick  = function() { _this.rotate(1) };
        _this.btnRight.onclick = function() { _this.rotate(-1) };

    };

    Slider.prototype.disableNav = function() {

        this.btnLeft.onclick  = null;
        this.btnRight.onclick = null;

    };

    Slider.prototype.setAutoplay = function() {
        let _this     = this;
        this.autoplay = setInterval( function() { _this.rotate(-1) }, _this.startSetup.autoplayInterval + 20 ); 
    };

    Slider.prototype.removeStyle = function() {

        let x = this.currentSlide;

        // this.descriptions[x].classList.remove( 'descriptions__item_visible' );
        this.slides[x].classList.remove( 'slides-holder__item_active' );
        this.slides[x].style.height = this.slides[x].style.width = this.slidesSize + 'px';

    };

    Slider.prototype.addStyle = function() {

        let x = this.currentSlide;

        // this.descriptions[x].classList.add( 'descriptions__item_visible' );
        this.slides[x].classList.add( 'slides-holder__item_active' );
        this.slides[x].style.height = this.slides[x].style.width = this.slidesSize + 20 + 'px';

    };

    Slider.prototype.resetNavs = function() {

        let _this = this;

        this.disableNav();
        setTimeout( function(){ _this.setNav() }, this.startSetup.animationDuration + 20 );
        if ( this.autoplay != null ) {
            clearInterval( this.autoplay );
            this.setAutoplay();
        };

    };

    ///////////Init sliders/////////// 
    window.circularSlider1 = new Slider( document.querySelector( '.circular-slider-1' ), 55, 20, 600, 2500 );


    let sliders = [ window.circularSlider1];
 
    window.onresize = function() {

        for ( let i = 0; i < sliders.length; i++ ){

            sliders[i].resetNavs();
            sliders[i].onResize();

        };

    };
    //////////////////////

} )();




}
}



 