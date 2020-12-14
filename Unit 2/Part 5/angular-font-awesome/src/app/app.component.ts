import { Component } from '@angular/core';
import { faEnvelope, faSpinner, faSquare, faUser as fasUser } from '@fortawesome/free-solid-svg-icons';
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(fasUser, farUser, faSquare, faSpinner, faEnvelope);
  }
}
