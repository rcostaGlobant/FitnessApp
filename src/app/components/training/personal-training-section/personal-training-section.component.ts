import { Training } from 'src/app/models/training/training/training';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from 'src/app/services/training.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-personal-training-section',
  templateUrl: './personal-training-section.component.html',
  styleUrls: ['./personal-training-section.component.scss']
})
export class PersonalTrainingSectionComponent implements OnInit, OnDestroy {

  fromDate: any;
  toDate: any;
  hourSelected: any;
  hasToPay: boolean;
  training: Training;
  private unsubscribe$= new Subject<void>();

  constructor(private trainingService: TrainingService,
              private router: Router, private activeRoute: ActivatedRoute) {
                this.hasToPay = false;
              }

  ngOnInit() {
    this.trainingService.getTraining()
    .pipe(takeUntil(this.unsubscribe$)) //desuscribirse para evitar memory leaks
    .subscribe( (training: Training)=>{
      this.training = training;
    });
  }

  navigateUrl(){
    if(!!this.training){
      if(this.router.url.includes('schedule')){
        this.router.navigate(["./user-info"], {relativeTo: this.activeRoute});
      }
     else if(this.router.url.includes('user-info')){
        this.router.navigate(["./payment"], {relativeTo: this.activeRoute});
     }
    }

  }

  goBack(){
    this.router.navigate(['..'], {relativeTo: this.activeRoute, skipLocationChange: true});
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}
