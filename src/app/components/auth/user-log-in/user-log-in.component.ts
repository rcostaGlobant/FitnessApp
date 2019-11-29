import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.scss']
})
export class UserLogInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginWithGoogle(): void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

  }

  /*loginWithFacebook(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);

  }*/

  signOut(): void {
    this.authService.signOut();
  }

}
