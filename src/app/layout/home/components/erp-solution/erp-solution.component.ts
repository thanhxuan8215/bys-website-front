import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erp-solution',
  templateUrl: './erp-solution.component.html',
  styleUrls: ['./erp-solution.component.scss']
})
export class ErpSolutionComponent implements OnInit {

  images = [1,2,3,4,5,6,7];
  options = {
    items: 1,
    dots: true,
    navigation: false,
    autoplay: true,
    loop: true,
    responsive: {
      481: {
        items: 1
      },
      768: {
        items: 3
      },
      1024: {
        items: 3
      }
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
