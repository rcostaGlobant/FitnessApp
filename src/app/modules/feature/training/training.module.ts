import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingProgramsComponent } from '../../../components/training/training-programs/training-programs.component';
import { SelectTrainingScheduleComponent } from '../../../components/training/select-training-schedule/select-training-schedule.component';
import { PersonalTrainingSectionComponent } from '../../../components/training/personal-training-section/personal-training-section.component';
import { PersonalTrainingTypeComponent } from '../../../components/training/personal-training-type/personal-training-type.component';

import { SharedModule } from '../../shared/shared.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserTrainingInfoComponent } from '../../../components/training/user-training-info/user-training-info.component';
import { PaymentRequerimentSectionComponent } from 'src/app/components/training/payment-requeriment-section/payment-requeriment-section.component';
import { TrainingHomeProgramsComponent } from '../../../components/training/training-home-programs/training-home-programs.component';

@NgModule({
  declarations: [TrainingProgramsComponent,
                 SelectTrainingScheduleComponent,
                 PersonalTrainingSectionComponent,
                 PersonalTrainingTypeComponent,
                 UserTrainingInfoComponent,
                 PaymentRequerimentSectionComponent,
                 TrainingHomeProgramsComponent],
  imports: [
    CommonModule,
    SharedModule ,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }
