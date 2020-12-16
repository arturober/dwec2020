import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleLoginModule } from './google-login/google-login.module';
import { FacebookLoginModule } from './facebook-login/facebook-login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    GoogleLoginModule.forRoot('667204529710-2b9jd5idoqepfe6ahpq3qo9kvtkmpdcb.apps.googleusercontent.com'),
    FacebookLoginModule.forRoot({app_id: '452581145459274', version: 'v9.0'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
