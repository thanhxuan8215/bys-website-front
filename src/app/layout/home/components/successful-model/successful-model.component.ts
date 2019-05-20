import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successful-model',
  templateUrl: './successful-model.component.html',
  styleUrls: ['./successful-model.component.scss']
})
export class SuccessfulModelComponent implements OnInit {

  images = [1,2,3,4,5,6,7,8,9];
  options = {
    items: 1,
    dots: true,
    navigation: false,
    autoplay: true,
    responsive: {
      481: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      },
      1366: {
        items: 4
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
