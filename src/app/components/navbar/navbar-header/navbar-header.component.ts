import { AppConfig } from './../../../models/config/config';
import { ConfigService } from './../../../services/config/config.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavbarHeaderComponent implements OnInit {

  configuration: AppConfig;
  selected: string;
  private currentUserBehaviorSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserBehaviorSubject.asObservable() ;

  constructor(public translate: TranslateService,
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
    this.currentUser$ = this.authService.isUserLogIn();
  }

  signOut(): void {
    this.authService.logOut();
  }




}
