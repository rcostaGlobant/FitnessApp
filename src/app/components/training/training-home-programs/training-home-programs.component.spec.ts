import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingHomeProgramsComponent } from './training-home-programs.component';

describe('TrainingHomeProgramsComponent', () => {
  let component: TrainingHomeProgramsComponent;
  let fixture: ComponentFixture<TrainingHomeProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingHomeProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingHomeProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
