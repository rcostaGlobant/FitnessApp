import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-user-training-info',
  templateUrl: './user-training-info.component.html',
  styleUrls: ['./user-training-info.component.scss']
})
export class UserTrainingInfoComponent implements OnInit {

  userTrainingForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userTrainingForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    });

    this.onChanges();

  }

  get f() { return this.userTrainingForm.controls; }

   onChanges(): void {
    this.userTrainingForm.valueChanges
    .pipe(debounceTime(500))
    .subscribe(val => {
      this.userTrainingForm.valid ? console.log("Valid") : console.log("INValid");

    });
  }


}
