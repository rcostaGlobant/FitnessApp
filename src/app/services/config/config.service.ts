import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/app/models/config/config';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private AppConfig;
  private dbConfigPath = 'initialConfig';

  constructor(private firestore: AngularFirestore) {

   }

  getConfig(){
    return this.AppConfig;
  }

  loadAppConfig(){
    return this.firestore.collection(this.dbConfigPath).valueChanges()
    .pipe(first())
    .toPromise()
    .then(res=>{
      this.AppConfig = res[0];
      console.log(this.AppConfig);
    });
  }
}
