import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminHomeComponent } from './dashboard-admin-home.component';

describe('DashboardAdminHomeComponent', () => {
  let component: DashboardAdminHomeComponent;
  let fixture: ComponentFixture<DashboardAdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAdminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
