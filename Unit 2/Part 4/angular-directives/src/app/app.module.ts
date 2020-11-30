import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SetColorDirective } from './directives/set-color.directive';
import { FormsModule } from '@angular/forms';
import { RepeatTimesDirective } from './directives/repeat-times.directive';
import { ForGroupDirective } from './directives/for-group.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetColorDirective,
    RepeatTimesDirective,
    ForGroupDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
