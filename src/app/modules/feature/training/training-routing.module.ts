import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingProgramsComponent } from 'src/app/components/training/training-programs/training-programs.component';
import { PersonalTrainingSectionComponent } from 'src/app/components/training/personal-training-section/personal-training-section.component';
import { SelectTrainingScheduleComponent } from 'src/app/components/training/select-training-schedule/select-training-schedule.component';
import { UserTrainingInfoComponent } from 'src/app/components/training/user-training-info/user-training-info.component';
import { PaymentRequerimentSectionComponent } from 'src/app/components/training/payment-requeriment-section/payment-requeriment-section.component';


const routes: Routes = [
  { path: '', component: TrainingProgramsComponent  },

  { path: 'personal-training/:name/booking',
    component: PersonalTrainingSectionComponent,
    children: [
      { path: '', redirectTo:'schedule', pathMatch:'full'  },
      { path: 'schedule', component: SelectTrainingScheduleComponent  },
      { path: 'user-info', component: UserTrainingInfoComponent  },
      { path: 'payment', component: PaymentRequerimentSectionComponent  },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
