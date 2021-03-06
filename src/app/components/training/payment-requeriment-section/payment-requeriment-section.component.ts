import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserPaymentCard } from 'src/app/models/training/user-payment-card/user-payment-card';
@Component({
  selector: 'app-payment-requeriment-section',
  templateUrl: './payment-requeriment-section.component.html',
  styleUrls: ['./payment-requeriment-section.component.scss']
})
export class PaymentRequerimentSectionComponent implements OnInit {
  paymentTrainingForm: FormGroup;
  panelOpenState = false;
  paymentCard: UserPaymentCard;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.paymentTrainingForm = this.formBuilder.group({
      userCardName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.minLength(6)]],
      cardExpirationDate: ['', [Validators.required, Validators.email]],
      cardCvv: ['', Validators.required]
    });
  }

}
