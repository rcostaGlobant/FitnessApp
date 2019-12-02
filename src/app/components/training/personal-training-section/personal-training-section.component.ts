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
  hasToPay: boolean;

  constructor(private trainingService: TrainingService,
              private router: Router, private activeRoute: ActivatedRoute) {
                this.hasToPay = false;
              }

  ngOnInit() {
    this.trainingService.training$.subscribe(training=> {
      if(!!training){
        this.fromDate = new Date(training.trainingBeginDate.year, training.trainingBeginDate.month-1, training.trainingBeginDate.day).toLocaleDateString();
        this.toDate = !!training && !!training.trainingEndDate? new Date(training.trainingEndDate.year,training.trainingEndDate.month-1,training.trainingEndDate.day).toLocaleDateString():null;
        if(!!training.userInfo)
        this.hasToPay=true;

      }

    });

    this.trainingService.training$.subscribe(training => {
        this.hourSelected = !!training && !!training.trainingUserHour ? training.trainingUserHour : null;
    });
  }

  navigateUrl(){
    //let url=this.router.url;
    if(this.router.url.includes('schedule')){
      this.router.navigate(["./user-info"], {relativeTo: this.activeRoute});
    }
   //lse if(this.router.url.includes('schedule')){}
  }

  goBack(){
    this.router.navigate(['..'], {relativeTo: this.activeRoute, skipLocationChange: true});
  }

}
