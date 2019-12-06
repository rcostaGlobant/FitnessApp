import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UserLogInComponent } from '../../../components/auth/user-log-in/user-log-in.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [UserLogInComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
