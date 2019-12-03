import { UserTrainingInfo } from 'src/app/models/training/user-training-info/user-training-info';
import { Training } from './../../../models/training/training/training';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { TrainingService } from 'src/app/services/training.service';



@Component({
  selector: 'app-user-training-info',
  templateUrl: './user-training-info.component.html',
  styleUrls: ['./user-training-info.component.scss']
})
export class UserTrainingInfoComponent implements OnInit,OnDestroy {

  userTrainingForm: FormGroup;
  submitted = false;
  training: Training;
  private unsubscribe$= new Subject<void>();

  constructor(private formBuilder: FormBuilder,private trainingService: TrainingService) {
    this.trainingService.getTraining()
    .pipe(takeUntil(this.unsubscribe$)) //desuscribirse para evitar memory leaks
    .subscribe(training=> {
        this.training = training;
    });
  }

  ngOnInit() {
    this.userTrainingForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

  }

  get f() { return this.userTrainingForm.controls; }



  onSubmit(){
    if(this.userTrainingForm.valid){
      let userInfo = new UserTrainingInfo();
      userInfo.userFullName = this.f.fullName.value;
      userInfo.userPhone = this.f.phone.value;
      userInfo.userEmail = this.f.email.value;
      userInfo.userMessage = this.f.message.value;
      if(!!this.training){
        this.training.userInfo = userInfo;
        this.trainingService.createOrUpdateNewTraining(this.training);
      }

    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
