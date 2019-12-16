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
  trainig: any;
  selectedDate: any;

  constructor(private trainingService: TrainingService) {
    this.trainig = this.trainingService.training$;
  }

  ngOnInit() {
  }


  onSelect(event) {
    this.selectedDate = event;
    this.trainingService.updateTrainingDate(this.selectedDate);
  }

  timeChanged() {
    if(!!this.selectedDate) {
      this.trainingService.updateTrainingTime(this.choosenTime);
    }
  }

}
