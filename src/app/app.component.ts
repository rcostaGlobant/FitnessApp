import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './services/auth/auth.service';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'BeFitness';
  private unsubscribe$= new Subject<void>();
  user$ : any;

  constructor(private authService: AuthService) {


  }

  ngOnInit(): void {
   this.authService.isRegularUser().subscribe(user=>{
    this.user$=!user.isAdmin;

   });
  }

  isUserAdmin(){
    this.authService.isRegularUser()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(userAuth => {
      if(!!userAuth /*&& !!userAuth.data()*/) {
       console.log("App COmponent", userAuth);

        //this.userImg = userAuth.photoURL;
      } else {
        console.log("App COmponent", userAuth);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
