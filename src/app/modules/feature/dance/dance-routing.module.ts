import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanceGalleryComponent } from 'src/app/components/dance/dance-gallery/dance-gallery.component';


const routes: Routes = [
  { path: '', component: DanceGalleryComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanceRoutingModule { }
