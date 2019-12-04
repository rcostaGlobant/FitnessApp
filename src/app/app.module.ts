import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { UnderConstructionModalComponent } from './components/shared/under-construction-modal/under-construction-modal.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DanceGalleryModalComponent } from './components/dance/dance-gallery-modal/dance-gallery-modal.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { TranslateModule, TranslateLoader, TranslatePipe } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { UserAuthenticationComponent } from './components/shared/user-authentication/user-authentication.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';



let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("430345365180-tj0av819gg5i2srk5jctv2ks30u7nftm.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("452032072164391")
  }
]);

export function provideConfig() {
  return config;
}

export function HttpLoaderFactory(htpp: HttpClient){
  return new TranslateHttpLoader(htpp);
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CoreModule,
    SocialLoginModule,
    NgxMaterialTimepickerModule,
    TranslateModule.forRoot({
      loader:{provide:TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]}
    }),
    AppRoutingModule
  ],
  providers: [
    {provide: AuthServiceConfig,
    useFactory: provideConfig
    }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [UnderConstructionModalComponent, DanceGalleryModalComponent, UserAuthenticationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
