import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.scss']
})
export class UserAuthenticationComponent implements OnInit {
  userRegisteringForm: FormGroup;
  userSingInForm: FormGroup;
  authError: any;
  userNeedToRegister: boolean;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              public dialogRef: MatDialogRef<UserAuthenticationComponent>) {
                this.userNeedToRegister = false;
               }

  ngOnInit() {
    this.userRegisteringForm = this.formBuilder.group({
      clientName: ['', Validators.required],
      clientPassword: ['', [Validators.required, Validators.minLength(6)]],
      clientPassword2: ['', [Validators.required, Validators.minLength(6)]],
      clientPhoneNumber: ['', [Validators.required, Validators.minLength(6)]],
      clientEmail: ['', [Validators.required, Validators.email]],
      clientAdress: ['', Validators.required]
    });

    this.userSingInForm = this.formBuilder.group({
      userEmail: ['', [Validators.required,  Validators.email ]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]]
    });

    //this.authError = this.authService.authErrorMsg$();

    this.onChanges();

  }

  onChanges(): void {
    this.userRegisteringForm.get('clientPassword').valueChanges
      .pipe(debounceTime(1000))
      .subscribe(val => {
        if(this.userRegisteringForm.controls.clientPassword2.value && this.userRegisteringForm.controls.clientPassword.value) {
          console.log("Siii password");
        }
      });
    this.userRegisteringForm.get('clientPassword2').valueChanges
    .pipe(debounceTime(1000))
    .subscribe(val => {
      if(this.userRegisteringForm.controls.clientPassword.value  && this.userRegisteringForm.controls.clientPassword2.value) {
        console.log("Siii password 2");
      }
    });
  }

  loginWithGoogle(): void {
    this.authService.singInWithGoogle().then(this.goToMainPage, this.errorRequest);
  }

  createUser(values): void {
    this.authService.createUser(values).then(this.goToMainPage, this.errorRequest);
  }

  loginWitEmailAndUserPassword(): void {
    this.authService.singInWithEmailAndUserPass(this.userSingInForm.controls.userEmail.value,
                                                this.userSingInForm.controls.userPassword.value)
                                                .then(this.goToMainPage, this.errorRequest);
  }

  userWantToRegister() {
    this.authError= null;
    this.userNeedToRegister = true;
   }

  loginWithFacebook() {
   this.authService.singInWithFacebook().then(this.goToMainPage, this.errorRequest);
  }

  goToMainPage = (res) => {
    //aqui con el usuario logueado busco sus programas y su configuracion asociada
    this.dialogRef.close(res);
  }

  errorRequest = (res) => {
    console.log(res);
    this.authError= res;
    this.userNeedToRegister ? this.userRegisteringForm.reset()  : this.userSingInForm.reset();

    //this.dialogRef.close();
  };

}
