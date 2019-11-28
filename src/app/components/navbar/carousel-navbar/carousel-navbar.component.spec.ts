import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNavbarComponent } from './carousel-navbar.component';

describe('CarouselNavbarComponent', () => {
  let component: CarouselNavbarComponent;
  let fixture: ComponentFixture<CarouselNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
