import { Component, OnInit, Output } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from 'events';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-select-training-schedule',
  templateUrl: './select-training-schedule.component.html',
  styleUrls: ['./select-training-schedule.component.scss']
})
export class SelectTrainingScheduleComponent implements OnInit {
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;

  @Output() selectedDate= new EventEmitter();

  constructor(calendar: NgbCalendar, private trainingService:TrainingService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
   }

  ngOnInit() {
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    this.trainingService.updatedDateSelection(this.fromDate, this.toDate);
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }


}
