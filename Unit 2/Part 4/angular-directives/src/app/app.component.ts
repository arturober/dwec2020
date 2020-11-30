import { Component } from '@angular/core';

@Component({
  selector: 'ad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directives';
  color = 'yellow';
  colsRow = 2;
  names = ['Peter', 'John', 'Joane', 'Loise', 'Mathew'];
}
