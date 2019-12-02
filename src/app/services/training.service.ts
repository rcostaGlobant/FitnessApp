import { UserTrainingInfo } from 'src/app/models/training/user-training-info/user-training-info';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Training } from '../models/training/training/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  private trainingSource: BehaviorSubject<Training> = new BehaviorSubject<Training>(undefined);
  public training$ = this.trainingSource.asObservable();

  constructor() { }


  updatedTrainingData(userTrainign: Training){
    this.trainingSource.next(userTrainign);
  }

  updatedUserInformation(userInfo: UserTrainingInfo){
    this.trainingSource.value.userInfo= userInfo;
  }

}
