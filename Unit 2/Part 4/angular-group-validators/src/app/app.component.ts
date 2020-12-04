import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'agv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  options: boolean[] = new Array(5);
  genre = '';
  otherGenre = '';

  ngOnInit(): void {
    this.options.fill(false);
  }
}
