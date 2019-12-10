import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { Observable, of, merge, BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthErrorMsg= new BehaviorSubject<string>(""); //this emmit the value
  authErrorMsg$ = this.eventAuthErrorMsg.asObservable(); //those who want to know the value must subscribe to this
  newUser: any;

  constructor(private fireAuth: AngularFireAuth,
              private firestore: AngularFirestore,
              private router: Router) {}

  async createUser(user){
    this.fireAuth.auth.createUserWithEmailAndPassword(user.clientEmail, user.clientPassword)
    .then(userCredentials => {
      this.newUser= user;
      userCredentials.user.updateProfile({
        displayName: this.newUser.clientName
      });
      return this.insertOrUpdateUserData(userCredentials)
      /*.then(()=>{
        this.router.navigate(['/home']);
      });*/

    })
    .catch((error)=>{
      this.eventAuthErrorMsg.next(error);
    })
  }

  insertOrUpdateUserData(userCredentials: firebase.auth.UserCredential){
    return this.firestore.doc(`users/${userCredentials.user.uid}`).set({
      uid: userCredentials.user.uid,
      displayName: userCredentials.user.displayName,
      photoUrl:  userCredentials.user.photoURL,
      email :  userCredentials.user.email,
      phoneNumber: this.newUser.clientPhoneNumber,
      address : this.newUser.clientAdress,
      isAdmin: false
    });
  }

  async singInWithGoogle(){
    const provider= new auth.GoogleAuthProvider();
    const credentials= await this.fireAuth.auth.signInWithPopup(provider);
    this.insertOrUpdateUserData(credentials);
  }

  async singInWithEmailAndUserPass(email: string, userPassword: string){
    const credentials = await this.fireAuth.auth.signInWithEmailAndPassword(email, userPassword);
    this.insertOrUpdateUserData(credentials);
  }


  async singInWithFacebook(){
    const provider= new auth.FacebookAuthProvider();
    const credentials= await this.fireAuth.auth.signInWithPopup(provider);
    this.insertOrUpdateUserData(credentials);
  }


  async logOut(){
    await this.fireAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  isUserLogIn(){
    return this.fireAuth.authState.pipe(
      map(auth => auth)
    );
  }

}
