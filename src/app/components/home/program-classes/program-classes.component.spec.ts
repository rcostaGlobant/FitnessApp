import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramClassesComponent } from './program-classes.component';

describe('ProgramClassesComponent', () => {
  let component: ProgramClassesComponent;
  let fixture: ComponentFixture<ProgramClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
