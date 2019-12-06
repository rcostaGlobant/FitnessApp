import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.scss']
})
export class UserAuthenticationComponent implements OnInit {
  userRegisteringForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              public dialogRef: MatDialogRef<UserAuthenticationComponent>) { }

  ngOnInit() {
    this.userRegisteringForm = this.formBuilder.group({
      clientName: ['', Validators.required],
      clientUser: ['', [Validators.required, Validators.minLength(6)]],
      clientPassword: ['', [Validators.required, Validators.minLength(6)]],
      clientPassword2: ['', [Validators.required, Validators.minLength(6)]],
      clientPhoneNumber: ['', [Validators.required, Validators.minLength(6)]],
      clientEmail: ['', [Validators.required, Validators.email]],
      clientAdress: ['', Validators.required]
    });
  }

  loginWithGoogle(): void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(this.goToMainPage, this.errorRequest);

  }

  loginWithFacebook(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(this.goToMainPage, this.errorRequest);

  }

  signOut(): void {
    this.authService.signOut();
  }


    goToMainPage=(res)=>{
      //aqui con el usuario logueado busco sus programas y su configuracion asociada
      this.dialogRef.close();
    };

    errorRequest=(res)=>this.dialogRef.close();

}
