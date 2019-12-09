import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

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
    this.authService.singInWithGoogle().then(this.goToMainPage, this.errorRequest);

  }

  loginWithFacebook(){
   this.authService.singInWithFacebook().then(this.goToMainPage, this.errorRequest);

  }

  goToMainPage=(res)=>{
    //aqui con el usuario logueado busco sus programas y su configuracion asociada
    this.dialogRef.close();
  };

  errorRequest=(res)=>this.dialogRef.close();

}
