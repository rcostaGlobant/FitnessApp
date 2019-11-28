import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/feature/initial/initial.module').then(m => m.InitialModule)
  },
  {
    path: 'training-programs',
    loadChildren: () => import('./modules/feature/training/training.module').then(m => m.TrainingModule)
  },
  {
    path: 'nutrition-program',
    loadChildren: () => import('./modules/feature/nutrition/nutrition.module').then(m => m.NutritionModule)
  },
  {
    path: 'dance',
    loadChildren: () => import('./modules/feature/dance/dance.module').then(m => m.DanceModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
