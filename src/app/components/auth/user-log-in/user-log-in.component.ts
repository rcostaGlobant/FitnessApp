import { Subject } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthenticationComponent } from '../../shared/user-authentication/user-authentication.component';


@Component({
  selector: 'app-user-log-in',
  templateUrl: './user-log-in.component.html',
  styleUrls: ['./user-log-in.component.scss']
})
export class UserLogInComponent implements OnInit {

  currentDialog: MatDialogRef<UserAuthenticationComponent> = null;
  destroy= new Subject<any>();

  constructor(matDialog: MatDialog,
              activatedRoute: ActivatedRoute,
              router: Router) {

        if(this.currentDialog){
          this.currentDialog.close();
        }
        this.currentDialog= matDialog.open(UserAuthenticationComponent);
        this.currentDialog.afterClosed().subscribe(res=>{
          console.log("Dialog closed");
          activatedRoute.url;
          router.navigateByUrl('/');

        });
  }

  ngOnInit() {
  }

  /*loginWithGoogle(): void{
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
    */
}
