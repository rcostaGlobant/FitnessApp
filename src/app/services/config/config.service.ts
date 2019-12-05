import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
private AppConfig;
  constructor(private http:HttpClient) { }

  getConfig(){
    return this.AppConfig;
  }

  loadAppConfig(){
    return this.http.get()
    .toPromise()
    .then(res=>{
      this.AppConfig=res;
    });
  }
}
