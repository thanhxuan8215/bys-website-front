import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulModelComponent } from './successful-model.component';

describe('SuccessfulModelComponent', () => {
  let component: SuccessfulModelComponent;
  let fixture: ComponentFixture<SuccessfulModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
