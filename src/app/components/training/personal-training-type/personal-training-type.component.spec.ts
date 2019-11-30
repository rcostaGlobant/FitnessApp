import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTrainingTypeComponent } from './personal-training-type.component';

describe('PersonalTrainingTypeComponent', () => {
  let component: PersonalTrainingTypeComponent;
  let fixture: ComponentFixture<PersonalTrainingTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalTrainingTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTrainingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
