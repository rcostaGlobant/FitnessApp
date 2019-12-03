import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Training } from '../models/training/training/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  /*private trainingSource: BehaviorSubject<Training> = new BehaviorSubject<Training>(undefined);
  public training$ = this.trainingSource.asObservable();*/

  private trainingSubject = new BehaviorSubject(undefined);
  private training: Training;

  constructor() { }

  getTraining(): Observable<Training> {
    return this.trainingSubject.asObservable();
  }

  private refresh() {
    // Emitir los nuevos valores para que todos los que dependan se actualicen.
    this.trainingSubject.next(this.training);
  }

  createOrUpdateNewTraining(training: Training) {
    /**
    * Evitar hacer this.user.push() pues estaríamos modificando los valores directamente,
    * se debe generar un nuevo array !!!!.
    */
    this.training = training;
    this.refresh();
  }


}
