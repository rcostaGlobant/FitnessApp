import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessLogoNameComponent } from './fitness-logo-name.component';

describe('FitnessLogoNameComponent', () => {
  let component: FitnessLogoNameComponent;
  let fixture: ComponentFixture<FitnessLogoNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessLogoNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessLogoNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
