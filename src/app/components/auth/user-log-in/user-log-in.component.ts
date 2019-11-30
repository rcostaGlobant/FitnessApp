import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.scss']
})
export class UserLogInComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

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
      this.router.navigateByUrl('/home');
    };

    errorRequest=(res)=>this.router.navigateByUrl('/home');

}
