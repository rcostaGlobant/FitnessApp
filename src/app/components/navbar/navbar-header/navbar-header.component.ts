import { AppConfig } from './../../../models/config/config';
import { ConfigService } from './../../../services/config/config.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})

export class NavbarHeaderComponent implements OnInit, OnDestroy {

  userIsLogged = false;
  private unsubscribe$= new Subject<void>();
  configuration : AppConfig;
  selected: string;
  userImg:any

  constructor(private translate: TranslateService,
              private authService: AuthService,
              private configService: ConfigService) {
                  this.configuration = this.configService.getConfig();
                  const languages = this.configuration.availableLanguages.map(language => {
                    return language.langName;
                  });
                  this.translate.addLangs(languages);
                  this.translate.setDefaultLang(this.configuration.defaultLanguage);
                  const browserLang = this.translate.getBrowserLang();
                  this.selected = browserLang.match(/en|fr|es/) ? browserLang : this.configuration.defaultLanguage;
                  this.translate.use(this.selected);

              }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isUserLogIn()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(userAuth => {
      if(!!userAuth /*&& !!userAuth.data()*/) {
        this.userIsLogged = true;
        //this.userImg = userAuth.photoURL;
      } else {
        this.userIsLogged = false;
      }
    });
  }

  signOut(): void {
    this.authService.logOut();
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
