import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionHomeComponent } from './nutrition-home.component';

describe('NutritionHomeComponent', () => {
  let component: NutritionHomeComponent;
  let fixture: ComponentFixture<NutritionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
