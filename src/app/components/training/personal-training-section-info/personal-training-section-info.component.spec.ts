import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTrainingSectionInfoComponent } from './personal-training-section-info.component';

describe('PersonalTrainingSectionInfoComponent', () => {
  let component: PersonalTrainingSectionInfoComponent;
  let fixture: ComponentFixture<PersonalTrainingSectionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalTrainingSectionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTrainingSectionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
