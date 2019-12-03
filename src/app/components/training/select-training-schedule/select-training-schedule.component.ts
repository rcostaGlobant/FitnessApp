import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from 'events';
import { TrainingService } from 'src/app/services/training.service';
import { Training } from 'src/app/models/training/training/training';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-training-schedule',
  templateUrl: './select-training-schedule.component.html',
  styleUrls: ['./select-training-schedule.component.scss']
})
export class SelectTrainingScheduleComponent implements OnInit {

  choosenTime: any;
  trainig: Training;
  selectedDate: any;

  constructor(private trainingService: TrainingService) {
    this.trainig = new Training();
  }

  ngOnInit() {
  }



  onSelect(event) {
    this.selectedDate = event;
    this.trainig.trainingBeginDate = this.selectedDate.toLocaleString();
    this.trainig.trainingEndDate = this.selectedDate.toLocaleString();
    if(!!this.choosenTime) {
      this.createTraining(this.trainig);
    }
  }

  timeChanged() {
    this.trainig.trainingUserHour = this.choosenTime;
    if(!!this.selectedDate) {
      this.createTraining(this.trainig);
    }
  }

  createTraining(training) {
    this.trainingService.createOrUpdateNewTraining(training);
  }

}
