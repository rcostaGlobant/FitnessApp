import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceGalleryComponent } from './dance-gallery.component';

describe('DanceGalleryComponent', () => {
  let component: DanceGalleryComponent;
  let fixture: ComponentFixture<DanceGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
