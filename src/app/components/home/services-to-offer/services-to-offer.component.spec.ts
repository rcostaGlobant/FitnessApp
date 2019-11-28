import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesToOfferComponent } from './services-to-offer.component';

describe('ServicesToOfferComponent', () => {
  let component: ServicesToOfferComponent;
  let fixture: ComponentFixture<ServicesToOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesToOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesToOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
