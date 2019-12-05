import { AppConfig } from './../../../models/config/config';
import { ConfigService } from './../../../services/config/config.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent implements OnInit, OnDestroy {

  loggedUser: boolean;
  user: SocialUser;
  private unsubscribe$= new Subject<void>();
  configuration : AppConfig;
  selected: string;
  constructor(private authService: AuthService,
              private translate: TranslateService,
              private configService: ConfigService) {
                  this.configuration = this.configService.getConfig();
                  const languages = this.configuration[4].availableLanguages.map(language => {
                    return language.name;
                  });
                  translate.addLangs(languages);
                  const lang= translate.getLangs();
                  translate.setDefaultLang(this.configuration[2].defaultLanguage);
                  const browserLang=translate.getBrowserLang();
                  this.selected=this.configuration[2].defaultLanguage;
                  translate.use(browserLang.match(/en|fr|es/)? browserLang : this.configuration[2].defaultLanguage);
                  //translate.use(this.selected);

              }

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

  change(){
    console.log("changed");

  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
