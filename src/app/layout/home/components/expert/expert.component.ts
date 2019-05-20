import { Component, OnInit, ViewChild } from '@angular/core';
import { Expert } from 'src/app/shared/models/expert';
import { ExpertService } from 'src/app/shared/services/expert.service';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit {
  
  @ViewChild('owlElement1') owlElement: OwlCarousel;
  experts: Expert[];
  expertSelected: Expert = new Expert();
  options = {
    items: 1,
    dots: true,
    navigation: false,
    responsive: {
      481: {
        items: 2
      },
      768: {
        items: 3,
      },
      1024: {
        items: 4
      },
      1366: {
        items: 6
      }
    },
  };
  constructor(private expertService: ExpertService) { }

  getExpertsFromService(): void {
    this.expertService.getExperts().subscribe(
      (result)=>{
        this.experts = result;
        const randomNumber = Math.floor(Math.random() * (result.length-1) + 0);
        setTimeout(() => {
          this.owlElement.to([randomNumber]);
          this.expertSelected = result[randomNumber];
        }, 100);
      }
    );
  }

  clickExpert(expert: Expert){
    this.expertSelected = expert;
  }

  ngOnInit() {
    this.getExpertsFromService();
  }

}
