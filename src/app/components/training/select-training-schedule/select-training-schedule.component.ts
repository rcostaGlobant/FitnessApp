import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from 'events';
import { TrainingService } from 'src/app/services/training.service';
import { Training } from 'src/app/models/training/training/training';

@Component({
  selector: 'app-select-training-schedule',
  templateUrl: './select-training-schedule.component.html',
  styleUrls: ['./select-training-schedule.component.scss']
})
export class SelectTrainingScheduleComponent implements OnInit {
  hoveredDate: NgbDate;
  /*fromDate: NgbDate;
  toDate: NgbDate;*/
  choosenTime:any

  trainig: Training;



  constructor(calendar: NgbCalendar, private trainingService:TrainingService) {
    this.trainig= new Training();
    this.trainig.trainingBeginDate = calendar.getToday();
    //this.trainig.trainingEndDate = calendar.getNext(calendar.getToday(), 'd', 10);
   }

  ngOnInit() {
  }

  onDateSelection(date: NgbDate) {
    if (!this.trainig.trainingBeginDate && !this.trainig.trainingEndDate) {
      this.trainig.trainingBeginDate = date;
    } else if (this.trainig.trainingBeginDate && !this.trainig.trainingEndDate && date.after(this.trainig.trainingBeginDate)) {
      this.trainig.trainingEndDate = date;
    } else {
      this.trainig.trainingEndDate = null;
      this.trainig.trainingBeginDate = date;
    }
    this.trainingService.updatedUserDateSelection(this.trainig);
  }

  isHovered(date: NgbDate) {
    return this.trainig.trainingBeginDate && !this.trainig.trainingEndDate && this.hoveredDate && date.after(this.trainig.trainingBeginDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.trainig.trainingBeginDate) && date.before(this.trainig.trainingEndDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.trainig.trainingBeginDate) || date.equals(this.trainig.trainingEndDate) || this.isInside(date) || this.isHovered(date);
  }

  timeChanged() {
    this.trainig.trainingUserHour=this.choosenTime;
    this.trainingService.updatedUserHourSelection(this.trainig);
  }

}
