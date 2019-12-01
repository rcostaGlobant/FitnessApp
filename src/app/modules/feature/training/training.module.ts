import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingProgramsComponent } from '../../../components/training/training-programs/training-programs.component';
import { SelectTrainingScheduleComponent } from '../../../components/training/select-training-schedule/select-training-schedule.component';
import { PersonalTrainingSectionComponent } from '../../../components/training/personal-training-section/personal-training-section.component';
import { PersonalTrainingTypeComponent } from '../../../components/training/personal-training-type/personal-training-type.component';
import { PersonalTrainingSectionInfoComponent } from '../../../components/training/personal-training-section-info/personal-training-section-info.component';
import { SharedModule } from '../../shared/shared.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TrainingProgramsComponent, SelectTrainingScheduleComponent, PersonalTrainingSectionComponent, PersonalTrainingTypeComponent, PersonalTrainingSectionInfoComponent],
  imports: [
    CommonModule,
    SharedModule ,
    FormsModule,
    NgxMaterialTimepickerModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }
