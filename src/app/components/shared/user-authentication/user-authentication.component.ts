import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.scss']
})
export class UserAuthenticationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,
              public dialogRef: MatDialogRef<UserAuthenticationComponent>) { }

  ngOnInit() {
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
