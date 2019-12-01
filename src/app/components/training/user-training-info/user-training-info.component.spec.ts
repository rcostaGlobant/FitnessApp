import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrainingInfoComponent } from './user-training-info.component';

describe('UserTrainingInfoComponent', () => {
  let component: UserTrainingInfoComponent;
  let fixture: ComponentFixture<UserTrainingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTrainingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTrainingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
