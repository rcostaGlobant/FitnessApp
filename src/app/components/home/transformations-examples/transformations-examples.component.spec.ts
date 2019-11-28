import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationsExamplesComponent } from './transformations-examples.component';

describe('TransformationsExamplesComponent', () => {
  let component: TransformationsExamplesComponent;
  let fixture: ComponentFixture<TransformationsExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransformationsExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformationsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
