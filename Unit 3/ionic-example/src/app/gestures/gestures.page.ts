import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestures',
  templateUrl: './gestures.page.html',
  styleUrls: ['./gestures.page.scss'],
})
export class GesturesPage implements OnInit {
  events = {
    taps: 0,
    press: 0,
    swipeRight: 0,
    swipeLeft: 0,
  };

  constructor() { }

  tap() {
    this.events.taps++;
  }

  press() {
    this.events.press++;
  }

  swipeLeft() {
    this.events.swipeLeft++;
  }

  swipeRight() {
    this.events.swipeRight++;
  }


  ngOnInit() {
  }

}
