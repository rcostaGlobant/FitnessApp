import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionRoutingModule } from './nutrition-routing.module';
import { NutritionHomeComponent } from '../../../components/nutrition/nutrition-home/nutrition-home.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NutritionHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NutritionRoutingModule
  ]
})
export class NutritionModule { }
