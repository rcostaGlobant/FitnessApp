import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-personal-training-section',
  templateUrl: './personal-training-section.component.html',
  styleUrls: ['./personal-training-section.component.scss']
})
export class PersonalTrainingSectionComponent implements OnInit {

  fromDate: any;
  toDate: any;
  hourSelected: any;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.trainingService.date$.subscribe(data => {
      if(!!data){
        this.fromDate = new Date(data.fromDate.year,data.fromDate.month-1,data.fromDate.day).toLocaleDateString();
        this.toDate = !!data && !!data.toDate? new Date(data.toDate.year,data.toDate.month-1,data.toDate.day).toLocaleDateString():null;
      }
    });

    this.trainingService.hour$.subscribe(hour => {
        this.hourSelected = !!hour? hour:null;
    });
  }

}
