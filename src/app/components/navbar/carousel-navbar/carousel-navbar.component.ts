import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-navbar',
  templateUrl: './carousel-navbar.component.html',
  styleUrls: ['./carousel-navbar.component.scss']
})
export class CarouselNavbarComponent implements OnInit {

  
  image2:string='./assets/images/sliders/fitness-slider.jpg';
  image3:string='./assets/images/sliders/banner_1.jpg';
  image4:string='./assets/images/sliders/img1.jpg';
  image5:string='./assets/images/sliders/slide1-1-1900x800.jpg';
  image7:string='./assets/images/sliders/slider-1.png';
  images = [this.image2,this.image3,this.image4,this.image5,this.image7];
  pauseOnHover = true;
  constructor() { }

  ngOnInit() {
  }

}
