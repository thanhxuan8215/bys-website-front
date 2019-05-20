import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  images = [1,2,3,4,5,6,7,8,9];
  options = {
    items: 1,
    dots: false,
    navigation: false,
    autoplay: true,
    loop: true,
    responsive: {
      480: {
        items: 1
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      },
      1366: {
        items: 5
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
