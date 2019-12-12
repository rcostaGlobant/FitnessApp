import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAdminHomeComponent } from 'src/app/components/admin/dashboard-admin-home/dashboard-admin-home.component';


const routes: Routes = [
  { path: '', component: DashboardAdminHomeComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
