import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {environment} from '../environments/environment';
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
import { ConfigService } from './services/config/config.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgHttpLoaderModule } from 'ng-http-loader';



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

const appConfiguration=(config: ConfigService)=>{
  return()=>{
    return config.loadAppConfig();
  }
}
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
    AngularFirestoreModule,
    AngularFireDatabaseModule, //for database
    BrowserAnimationsModule,
    NgHttpLoaderModule.forRoot(),
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
    ConfigService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appConfiguration,
      multi:true,
      deps:[ConfigService]
    }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [UnderConstructionModalComponent, DanceGalleryModalComponent, UserAuthenticationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
