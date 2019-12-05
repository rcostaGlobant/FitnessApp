import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialRoutingModule } from './initial-routing.module';
import { AboutMeComponent } from '../../../components/home/about-me/about-me.component';
import { ServicesToOfferComponent } from '../../../components/home/services-to-offer/services-to-offer.component';
import { OurTeamComponent } from '../../../components/home/our-team/our-team.component';
import { TransformationsExamplesComponent } from '../../../components/home/transformations-examples/transformations-examples.component';
import { HomeComponent } from '../../../components/home/home/home.component';
import { ProgramClassesComponent } from '../../../components/home/program-classes/program-classes.component';
import { WhyUsComponent } from '../../../components/home/why-us/why-us.component';
import { WhyChooseUsComponent } from '../../../components/home/why-choose-us/why-choose-us.component';
import { SharedModule } from '../../shared/shared.module';
import { ProgramOptionsComponent } from '../../../components/home/program-options/program-options.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [AboutMeComponent, ServicesToOfferComponent, OurTeamComponent, TransformationsExamplesComponent, HomeComponent, ProgramClassesComponent, WhyUsComponent, WhyChooseUsComponent, ProgramOptionsComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    InitialRoutingModule
  ]
})
export class InitialModule { }
