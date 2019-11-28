import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstructionModalComponent } from './under-construction-modal.component';

describe('UnderConstructionModalComponent', () => {
  let component: UnderConstructionModalComponent;
  let fixture: ComponentFixture<UnderConstructionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderConstructionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderConstructionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
