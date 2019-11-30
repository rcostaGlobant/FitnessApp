import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  private dataSource = new BehaviorSubject<any>(undefined);
  public date$ = this.dataSource.asObservable();

  updatedDateSelection(fromDate: NgbDate,toDate: NgbDate){
    let data={
      fromDate:fromDate,
      toDate:toDate
    };
    this.dataSource.next(data);
  }

  constructor() { }
}
