import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardAdminHomeComponent } from '../../../components/admin/dashboard-admin-home/dashboard-admin-home.component';


@NgModule({
  declarations: [DashboardAdminHomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
