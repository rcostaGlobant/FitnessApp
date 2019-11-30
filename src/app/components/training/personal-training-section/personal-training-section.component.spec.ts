import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTrainingSectionComponent } from './personal-training-section.component';

describe('PersonalTrainingSectionComponent', () => {
  let component: PersonalTrainingSectionComponent;
  let fixture: ComponentFixture<PersonalTrainingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalTrainingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTrainingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
