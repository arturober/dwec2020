import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleLoginModule } from './google-login/google-login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    GoogleLoginModule.forRoot('667204529710-2b9jd5idoqepfe6ahpq3qo9kvtkmpdcb.apps.googleusercontent.com')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
