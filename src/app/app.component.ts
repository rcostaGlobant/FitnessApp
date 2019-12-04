import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'BeFitness';
  private unsubscribe$= new Subject<void>();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authState
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((user) => {
      console.log("Hay user");
      console.log(user);

      //hacer el pedido de los datos usuario a la api para mostrarlos
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
