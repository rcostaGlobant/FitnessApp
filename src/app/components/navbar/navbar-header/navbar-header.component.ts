import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent implements OnInit, OnDestroy {

  loggedUser: boolean;
  user: SocialUser;
  private unsubscribe$= new Subject<void>();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authState
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((user) => {
      this.loggedUser= (user != null);
      this.user=user;
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
