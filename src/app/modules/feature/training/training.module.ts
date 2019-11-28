import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingProgramsComponent } from '../../../components/training/training-programs/training-programs.component';


@NgModule({
  declarations: [TrainingProgramsComponent],
  imports: [
    CommonModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }
