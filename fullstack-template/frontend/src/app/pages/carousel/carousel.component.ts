import { Component, OnInit } from '@angular/core';
import { Lecture } from 'src/app/Objects/Lecture';
import { Week } from 'src/app/Objects/Week';
declare const window:any

@Component({
  selector: 'ami-fullstack-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  lectureslist:Lecture[];
  olids:number[];
  flagopenedlecture:boolean;

  weeks: Week[];
  constructor() {
    
    this.flagopenedlecture=false;

    this.olids=[];

    this.lectureslist=[
      {id:0,title:"Tutorial on Project"},
      {id:1,title:"Multimodal Interaction and Intelligent Interfaces"},
      {id:2,title:"Interface Design for Mobile and Wearable Devices, Automoblies and the New Media"}
    ]
    this.weeks=[
      {lectures:this.lectureslist,photo:"../../../assets/Group 40.png"},
      {lectures:this.lectureslist,photo:"../../../assets/Group 41.png"},
      {lectures:this.lectureslist,photo:"../../../assets/Group 43.png"},
      {lectures:this.lectureslist,photo:"../../../assets/Group 44.png"},
      {lectures:this.lectureslist,photo:"../../../assets/Group 45.png"},
      {lectures:this.lectureslist,photo:"../../../assets/Group 46.png"},
      {lectures:this.lectureslist,photo:"../../../assets/Group 47.png"},
      {lectures:this.lectureslist,photo:"../../../assets/Group 48.png"},
      {lectures:this.lectureslist,photo:"../../../assets/Group 49.png"},
      {lectures:this.lectureslist,photo:"../../../assets/Group 50.png"},
      {lectures:this.lectureslist,photo:"../../../assets/Group 51.png"}
    ]

  }



  openLectures(id:number){
    console.log("opened");
    let lects = document.getElementsByClassName('lectures')[id] as HTMLElement;
    if (lects.style.display === "none") {
      lects.style.display = "block";
    } else {
      lects.style.display = "none";
    }
  }
  
  chooseLecture(id:number,parentid:number){
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
      
      
      (parent.getElementsByClassName(mydivid)[0] as HTMLElement).style.cssText='z-index: 9;background-color: #f1f1f1;text-align: center;border: 1px solid #d3d3d3;'
    
      this.olids.push(id);
     
    }else{
      this.olids.forEach(element => {
        var elementmix = 'lectureImage' + element;
        var mydivmix='mydiv' + element;
        var lecimgpop = parent.getElementsByClassName(elementmix)[0] as HTMLImageElement;
        lecimgpop.src = "../../../assets/Rectangle 6.png";
        (parent.getElementsByClassName(mydivmix)[0] as HTMLElement).style.display='none';

        this.olids.pop();
        console.log(elementmix);
      });
      var lecimg = parent.getElementsByClassName(imgid)[0] as HTMLImageElement;
      lecimg.src = "../../../assets/Rectangle 4.png";
     
      (parent.getElementsByClassName(mydivid)[0] as HTMLElement).style.cssText='z-index: 9;background-color: #f1f1f1;text-align: center;border: 1px solid #d3d3d3;'
    
      this.olids.push(id);
    
    } 
    // 
    
  }

  ngOnInit() {
 
  }

  ngAfterViewChecked(){	
    let leccollect =  document.getElementsByClassName('lectures');
    for(let i =0;i<leccollect.length;i++){
       leccollect[i].addEventListener('click',function (event){
         event.stopPropagation();
      });
     
    }
    
    ( function() {
      'use strict';
  
      function startSetup( sliderSize, slideSize, animationDuration, autoplayInterval ) {
  
          this.sliderSize        = parseFloat( sliderSize )/100;
          this.slideSize         = parseFloat( slideSize )/100;
          this.animationDuration = parseFloat( animationDuration );
          this.autoplayInterval  = parseFloat( autoplayInterval );
  
      };
  
      function Slider( newSlider, sliderSize, slideSize, animationDuration, autoplayInterval ) {
  
          newSlider = document.getElementById('slider');

          this.startSetup           = new startSetup( sliderSize, slideSize, animationDuration, autoplayInterval ),
  
          this.wrapper              = newSlider.querySelector( '.wrapper' );
  
          this.slides               = newSlider.querySelectorAll( '.circular-slider .wrapper .slides-holder .slides-holder__item' );
  
          this.slidesSize           = 0;
  
          // this.descriptionsHolder   = newSlider.querySelector( '.circular-slider .wrapper .descriptions' );
  
          // this.descriptions         = newSlider.querySelectorAll( '.circular-slider .wrapper .descriptions .descriptions__item' );
  
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
          // this.addStyle();
  
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
          this.wrapper.style.width='100%';
          this.wrapper.style.height='100%';
          let r                         = 2*radius*( 1 - this.startSetup.slideSize );
          this.slidesHolder.style.width = this.slidesHolder.style.height = r + 'px';
          this.slidesRepositioning( r/2 );
  
          this.slidesHolder.style.marginTop    = radius*this.startSetup.slideSize  + 'px';
          // this.descriptionsHolder.style.width  = ( r/2 - r*this.startSetup.slideSize + 20)*2 + 'px';
          // this.descriptionsHolder.style.height = r/2 - r*this.startSetup.slideSize + 20 + 'px';
  
          this.slidesSize                        = Math.min( 2*radius*this.startSetup.slideSize, this.stepAngle*radius*( 1 - this.startSetup.slideSize ) - 50 );
          // this.descriptionsHolder.style.fontSize = window.innerHeight < window.innerWidth ? '1.2vh'
                                                                                          // :  '1.2vw';
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
  
          // this.removeStyle();
          this.resetNavs();
  
          if( this.currentSlide === this.slides.length - 1  && multiplier === -1 ) {
  
              this.slidesHolder.style.transform     = 'rotate( -360deg )';
              this.currentSlide = this.currentAngle = 0;
              // this.addStyle();
  
              setTimeout( function(){
  
                  _this.slidesHolder.style.transitionDuration = 0 + 's';
                  _this.slidesHolder.style.transform          = 'rotate( ' + _this.currentAngle + 'deg )';
                  setTimeout( function() { _this.slidesHolder.style.transitionDuration = _this.startSetup.animationDuration + 'ms'; }, 20 );
  
              }, this.startSetup.animationDuration );
  
          } else if ( this.currentSlide === 0 && multiplier === 1 ) {
  
              this.slidesHolder.style.transform = 'rotate( ' + this.stepAngle*180/Math.PI + 'deg )';
              this.currentSlide                 = _this.slides.length - 1;
              this.currentAngle                 = -( 2*Math.PI - _this.stepAngle )*180/Math.PI;
              // this.addStyle();
  
              setTimeout( function(){
  
                  _this.slidesHolder.style.transitionDuration = 0 + 's';
                  _this.slidesHolder.style.transform = 'rotate( ' + _this.currentAngle + 'deg )';
                  setTimeout( function() { _this.slidesHolder.style.transitionDuration = _this.startSetup.animationDuration + 'ms'; }, 20 );
  
              }, this.startSetup.animationDuration );
  
          } else {
  
              this.currentSlide                -= multiplier;
              this.currentAngle                += ( this.stepAngle*180/Math.PI )*multiplier;
              this.slidesHolder.style.transform = 'rotate( ' + this.currentAngle + 'deg )';
              // this.addStyle();
  
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
  
      // Slider.prototype.removeStyle = function() {
  
      //     let x = this.currentSlide;
  
      //     // this.descriptions[x].classList.remove( 'descriptions__item_visible' );
      //     this.slides[x].classList.remove( 'slides-holder__item_active' );
      //     this.slides[x].style.height = this.slides[x].style.width = this.slidesSize + 'px';
  
      // };
  
      // Slider.prototype.addStyle = function() {
  
      //     let x = this.currentSlide;
  
      //     // this.descriptions[x].classList.add( 'descriptions__item_visible' );
      //     this.slides[x].classList.add( 'slides-holder__item_active' );
      //     this.slides[x].style.height = this.slides[x].style.width = this.slidesSize + 20 + 'px';
  
      // };
  
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
      // console.log('slide');
      let sliders = [ window.circularSlider1];
   
      window.onresize = function() {
  
          for ( let i = 0; i < sliders.length; i++ ){
  
              sliders[i].resetNavs();
              sliders[i].onResize();
  
          };
  
      };
      //////////////////////
  
      let slides2 = Array.from(document.querySelectorAll('.slide'))
    
    let isDragging = false,
      startPos = 0,
      currentTranslate = 0,
      prevTranslate = 0,
      animationID = 0,
      currentIndex = 0
    
     slides2.forEach((slide, index) => {
       console.log('slide');
       const slideImage = slide.querySelector('img')
       slideImage.addEventListener('dragstart', (e) => e.preventDefault())
    
      // Touch events
      this.wrapper.addEventListener('touchstart', touchStart(index))
      this.wrapper.addEventListener('touchend', touchEnd)
      this.wrapper.addEventListener('touchmove', touchMove)
    
      // Mouse events
      this.wrapper.addEventListener('mousedown', touchStart(index))
      this.wrapper.addEventListener('mouseup', touchEnd)
      this.wrapper.addEventListener('mouseleave', touchEnd)
      this.wrapper.addEventListener('mousemove', touchMove)
    })
    
    // Disable context menu
    window.oncontextmenu = function (event) {
      event.preventDefault()
      event.stopPropagation()
      return false
    }
    
    function touchStart(index) {
      return function (event) {
        currentIndex = index
        startPos = getPositionX(event)
        isDragging = true
    
        // https://css-tricks.com/using-requestanimationframe/
        animationID = requestAnimationFrame(animation)
        this.wrapper.classList.add('grabbing')
      }
    }
    
    function touchEnd() {
      isDragging = false
      cancelAnimationFrame(animationID)
    
      const movedBy = currentTranslate - prevTranslate
    
      if (movedBy < -100 && currentIndex < slides2.length - 1) currentIndex += 1
    
      if (movedBy > 100 && currentIndex > 0) currentIndex -= 1
    
      setPositionByIndex()
    
      this.wrapper.classList.remove('grabbing')
    }
    
    function touchMove(event) {
      if (isDragging) {
        const currentPosition = getPositionX(event)
        currentTranslate = prevTranslate + currentPosition - startPos
      }
    }
    
    function getPositionX(event) {
      return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
    }
    
    function animation() {
      setSliderPosition()
      if (isDragging) requestAnimationFrame(animation)
    }
    
    function setSliderPosition() {
      this.wrapper.style.transform = `translateX(${currentTranslate}px)`
    }
    
    function setPositionByIndex() {
      currentTranslate = currentIndex * -window.innerWidth
      prevTranslate = currentTranslate
      setSliderPosition()
    }
    


  } )();

  }



}
