import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UnderConstructionModalComponent } from '../../components/shared/under-construction-modal/under-construction-modal.component';
import { DanceGalleryModalComponent } from 'src/app/components/dance/dance-gallery-modal/dance-gallery-modal.component';
import { UserAuthenticationComponent } from '../../components/shared/user-authentication/user-authentication.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UnderConstructionModalComponent,DanceGalleryModalComponent, UserAuthenticationComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    NgbModule
  ],
  exports:[
    AngularMaterialModule,
    NgbModule,
    UnderConstructionModalComponent,
    DanceGalleryModalComponent,
    UserAuthenticationComponent]
})
export class SharedModule { }
