import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExpertComponent } from './components/expert/expert.component';
import { SuccessfulModelComponent } from './components/successful-model/successful-model.component';
import { OwlModule } from 'ngx-owl-carousel';
import { CustomerComponent } from './components/customer/customer.component';
import { ErpSolutionComponent } from './components/erp-solution/erp-solution.component';
import { CommentComponent } from './components/comment/comment.component';
import { ExpertService } from 'src/app/shared/services/expert.service';

@NgModule({
  declarations: [HomeComponent, CarouselComponent, ExpertComponent, SuccessfulModelComponent, CustomerComponent, ErpSolutionComponent, CommentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    OwlModule
  ]
})
export class HomeModule { }
