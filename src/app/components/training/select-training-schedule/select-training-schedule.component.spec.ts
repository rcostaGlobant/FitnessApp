import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTrainingScheduleComponent } from './select-training-schedule.component';

describe('SelectTrainingScheduleComponent', () => {
  let component: SelectTrainingScheduleComponent;
  let fixture: ComponentFixture<SelectTrainingScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTrainingScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTrainingScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
