import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OneCheckedDirective } from './validators/one-checked.directive';
import { GenreValidDirective } from './validators/genre-valid.directive';

@NgModule({
  declarations: [
    AppComponent,
    OneCheckedDirective,
    GenreValidDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
