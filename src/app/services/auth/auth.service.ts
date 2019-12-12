import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { BehaviorSubject, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import { map, switchMap } from 'rxjs/operators';

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

  async createUser(user) {
    this.fireAuth.auth.createUserWithEmailAndPassword(user.clientEmail, user.clientPassword)
    .then( userCredentials => {
      this.newUser = user;
      userCredentials.user.updateProfile({
        displayName: this.newUser.clientName
      });
      this.insertOrUpdateUserData(userCredentials)
    })
    .catch((error) => {
      this.eventAuthErrorMsg.next(error);
    });
  }

  insertOrUpdateUserData(userCredentials: firebase.auth.UserCredential) {
    return this.firestore.doc(`users/${userCredentials.user.uid}`).get().toPromise().then((user) => {
        if (!!user && user.exists) {
          return user.data().userToUpdate;
        } else{
          const userToUpdate = {
            uid: userCredentials.user.uid,
            displayName: userCredentials.user.displayName,
            photoUrl:  userCredentials.user.photoURL,
            email :  userCredentials.user.email,
            phoneNumber: (this.newUser && this.newUser.clientPhoneNumber)  ? this.newUser.clientPhoneNumber : "",
            address : (this.newUser && this.newUser.clientAdress) ? this.newUser.clientAdress : "",
            isAdmin: false
          };
          return this.firestore.doc(`users/${userCredentials.user.uid}`).set({userToUpdate});
        }
    });
  }

  async singInWithGoogle() {
    const provider= new auth.GoogleAuthProvider();
    const credentials= await this.fireAuth.auth.signInWithPopup(provider);
    return this.insertOrUpdateUserData(credentials);
  }

  async singInWithEmailAndUserPass(email: string, userPassword: string){
    const credentials = await this.fireAuth.auth.signInWithEmailAndPassword(email, userPassword);
    return this.insertOrUpdateUserData(credentials);
  }


  async singInWithFacebook() {
    const provider= new auth.FacebookAuthProvider();
    const credentials= await this.fireAuth.auth.signInWithPopup(provider);
    return this.insertOrUpdateUserData(credentials);
  }


  async logOut() {
    await this.fireAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

   isUserLogIn() {
    return this.fireAuth.authState.pipe(
      map(auth => auth)
    );
  }

  isRegularUser() {
    return this.fireAuth.authState.pipe(
      switchMap(auth => {
        if(!!auth){
          return this.firestore.doc(`users/${auth.uid}`).get().pipe(map(user=>user.data().userToUpdate));
        }else{
          return of({isAdmin:false});
        }

      })
    );
  }

}
