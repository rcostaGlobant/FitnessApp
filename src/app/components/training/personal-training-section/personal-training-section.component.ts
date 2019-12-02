import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/services/training.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-training-section',
  templateUrl: './personal-training-section.component.html',
  styleUrls: ['./personal-training-section.component.scss']
})
export class PersonalTrainingSectionComponent implements OnInit {

  fromDate: any;
  toDate: any;
  hourSelected: any;
  constructor(private trainingService: TrainingService,
              private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.trainingService.date$.subscribe(data => {
      if(!!data){
        this.fromDate = new Date(data.fromDate.year,data.fromDate.month-1,data.fromDate.day).toLocaleDateString();
        this.toDate = !!data && !!data.toDate? new Date(data.toDate.year,data.toDate.month-1,data.toDate.day).toLocaleDateString():null;
      }
    });

    this.trainingService.hour$.subscribe(hour => {
        this.hourSelected = !!hour ? hour : null;
    });
  }

  navigateUrl(){
    let url=this.router.url;
    if(this.router.url.includes('schedule')){
      this.router.navigate(["./user-info"], {relativeTo: this.activeRoute});
    }
    else if(this.router.url.includes('schedule')){}
  }

  goBack(){
    this.router.navigate(['..'], {relativeTo: this.activeRoute, skipLocationChange: true});
  }

}
