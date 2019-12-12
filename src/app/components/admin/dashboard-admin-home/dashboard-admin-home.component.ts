import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-admin-home',
  templateUrl: './dashboard-admin-home.component.html',
  styleUrls: ['./dashboard-admin-home.component.scss']
})
export class DashboardAdminHomeComponent implements OnInit {
  private unsubscribe$= new Subject<void>();
  userImg: any = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isUserLogIn()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(userAuth => {
      if(!!userAuth ) {

        this.userImg = userAuth.photoURL;
      } else {
        this.userImg = null;
      }
    });
  }

  signOut(): void {
    this.authService.logOut();
  }

}
