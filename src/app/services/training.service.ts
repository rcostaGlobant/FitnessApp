import { UserTrainingInfo } from './../models/training/user-training-info/user-training-info';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Training } from '../models/training/training/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  private defaultTraining: Training = {
    trainingBeginDate: new Date(),
    trainingEndDate: new Date(),
    trainingUserHour: 0,
    userInfo: null
  };

  private trainingBehaviorSubject = new BehaviorSubject<Training>(this.defaultTraining);
  training$ = this.trainingBehaviorSubject.asObservable();

  constructor() { }

  getTraining(): Observable<Training> {
    return this.trainingBehaviorSubject.asObservable();
  }


  updateTrainingDate(date: Date){
    if( this.defaultTraining.trainingBeginDate.getTime() <= date.getTime())
    {
      this.defaultTraining.trainingEndDate = date;
      this.trainingBehaviorSubject.next(this.defaultTraining);
    }
    else{
      this.trainingBehaviorSubject.next(this.defaultTraining);
    }
  }

  updateUserInfo(userInfo: UserTrainingInfo){
    this.defaultTraining.userInfo = userInfo;
    this.trainingBehaviorSubject.next(this.defaultTraining);
  }


  updateTrainingTime(date: any){
    this.defaultTraining.trainingUserHour = date;
    this.trainingBehaviorSubject.next(this.defaultTraining);

  }



}
