import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionRoutingModule } from './nutrition-routing.module';
import { NutritionHomeComponent } from '../../../components/nutrition/nutrition-home/nutrition-home.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [NutritionHomeComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    SharedModule,
    NutritionRoutingModule
  ]
})
export class NutritionModule { }
