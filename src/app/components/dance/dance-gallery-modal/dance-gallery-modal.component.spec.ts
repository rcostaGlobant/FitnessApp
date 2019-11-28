import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceGalleryModalComponent } from './dance-gallery-modal.component';

describe('DanceGalleryModalComponent', () => {
  let component: DanceGalleryModalComponent;
  let fixture: ComponentFixture<DanceGalleryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceGalleryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceGalleryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
