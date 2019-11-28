import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NutritionHomeComponent } from 'src/app/components/nutrition/nutrition-home/nutrition-home.component';


const routes: Routes = [
  { path: '', component: NutritionHomeComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutritionRoutingModule { }
