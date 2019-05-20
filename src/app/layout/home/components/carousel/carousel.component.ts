import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;

  public images = [
    { url: "assets/images/slide1.png"},
    { url: "assets/images/slide2.png"}
  ];
  options = {
    items: 1,
    dots: true,
    navigation: false,
    autoplay: true,
    loop: true,
  };

  constructor() { }

  clickPrevious(){
    this.owlElement.previous();
  }

  clickNext(){
    this.owlElement.next();
  }

  ngOnInit() {
  }

}
