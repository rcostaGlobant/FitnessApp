import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRequerimentSectionComponent } from './payment-requeriment-section.component';

describe('PaymentRequerimentSectionComponent', () => {
  let component: PaymentRequerimentSectionComponent;
  let fixture: ComponentFixture<PaymentRequerimentSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentRequerimentSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentRequerimentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
