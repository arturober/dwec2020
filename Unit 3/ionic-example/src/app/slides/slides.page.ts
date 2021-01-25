import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  constructor() { }

  ngOnInit() {
  }

  async slideChange(event: Event) {
    const slides = (event.target as HTMLIonSlidesElement);
    console.log(await slides.getActiveIndex());
  }

}
