import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarHeaderComponent } from '../../components/navbar/navbar-header/navbar-header.component';
import { CarouselNavbarComponent } from '../../components/navbar/carousel-navbar/carousel-navbar.component';
import { MenuNavbarComponent } from '../../components/navbar/menu-navbar/menu-navbar.component';
import { NavbarFooterComponent } from '../../components/navbar/navbar-footer/navbar-footer.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FitnessLogoNameComponent } from '../../components/navbar/fitness-logo-name/fitness-logo-name.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NavbarHeaderComponent, CarouselNavbarComponent, MenuNavbarComponent, NavbarFooterComponent, FitnessLogoNameComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [NavbarHeaderComponent, CarouselNavbarComponent, MenuNavbarComponent, NavbarFooterComponent, FitnessLogoNameComponent]
})
export class CoreModule { }
