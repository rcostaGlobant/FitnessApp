import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { Observable, of, merge } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $user: Observable<User>;

  constructor(private fireAuth: AngularFireAuth,
              private firestore: AngularFirestore,
              private router: Router) {

                this.$user = this.fireAuth.authState
                .pipe(
                  switchMap(user=>{
                    if(user){
                      return this.firestore.doc<User>(`users/${user.uid}`).valueChanges();
                    }else{
                      return of(null);
                    }

                  })
                );
              }

  async singInWithGoogle(){
    const provider= new auth.GoogleAuthProvider();
    const credentials= await this.fireAuth.auth.signInWithPopup(provider);
    return this.UpdateUserData(credentials.user);
  }

  async singInWithFacebook(){
    const provider= new auth.FacebookAuthProvider();
    const credentials= await this.fireAuth.auth.signInWithPopup(provider);
    return this.UpdateUserData(credentials.user);
  }


  async logOut(){
    await this.fireAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  private UpdateUserData(user){
    const userRef: AngularFirestoreDocument<User> = this.firestore.doc<User>(`users/${user.id}`);

    const data= {
      uid: user.id,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoUrl
    };

    return userRef.set(data, {merge: true});
  }

}
