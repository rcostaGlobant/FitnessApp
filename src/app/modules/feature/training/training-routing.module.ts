import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingProgramsComponent } from 'src/app/components/training/training-programs/training-programs.component';


const routes: Routes = [
  { path: '', component: TrainingProgramsComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
