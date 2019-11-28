import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DanceRoutingModule } from './dance-routing.module';
import { DanceGalleryComponent } from '../../../components/dance/dance-gallery/dance-gallery.component';
import { DanceGalleryModalComponent } from '../../../components/dance/dance-gallery-modal/dance-gallery-modal.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [DanceGalleryComponent],
  imports: [
    CommonModule,
    SharedModule,
    DanceRoutingModule
  ]
})
export class DanceModule { }
