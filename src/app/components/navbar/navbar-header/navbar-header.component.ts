import { AppConfig } from './../../../models/config/config';
import { ConfigService } from './../../../services/config/config.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
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

  loggedUser= false;

  private unsubscribe$= new Subject<void>();
  configuration : AppConfig;
  selected: string;

  constructor(private translate: TranslateService,
              private authService: AuthService,
              private configService: ConfigService) {
                  this.configuration = this.configService.getConfig();
                  const languages = this.configuration.availableLanguages.map(language => {
                    return language.langName;
                  });
                  translate.addLangs(languages);
                  translate.setDefaultLang(this.configuration.defaultLanguage);
                  const browserLang = translate.getBrowserLang();
                  this.selected = browserLang.match(/en|fr|es/) ? browserLang : this.configuration.defaultLanguage;
                  translate.use(this.selected);

              }

  ngOnInit(): void {
    this.authService.$user
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((user) => {
      this.loggedUser = (user != null);

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
