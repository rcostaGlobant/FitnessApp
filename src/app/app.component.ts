import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SpinnerVisibilityService, Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'BeFitness';
  public spinkit = Spinkit;

  constructor() { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
  }
}
