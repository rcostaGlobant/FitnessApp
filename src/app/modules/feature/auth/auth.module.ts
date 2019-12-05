import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UserLogInComponent } from '../../../components/auth/user-log-in/user-log-in.component';
import { SharedModule } from '../../shared/shared.module';
import { UserRegisterComponent } from '../../../components/auth/user-register/user-register.component';


@NgModule({
  declarations: [UserLogInComponent, UserRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
