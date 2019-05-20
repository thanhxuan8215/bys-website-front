import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpSolutionComponent } from './erp-solution.component';

describe('ErpSolutionComponent', () => {
  let component: ErpSolutionComponent;
  let fixture: ComponentFixture<ErpSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
