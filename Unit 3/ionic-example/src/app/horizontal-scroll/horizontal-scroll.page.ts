import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.page.html',
  styleUrls: ['./horizontal-scroll.page.scss'],
})
export class HorizontalScrollPage implements OnInit {
  icons: string[] = [
    'alert', 'albums', 'alarm', 'analytics', 'logo-angular', 'logo-apple',
    'logo-nodejs', 'archive', 'at', 'baseball', 'basket', 'battery-charging',
    'beer', 'bicycle', 'logo-bitcoin', 'boat', 'logo-tux'
  ];

  constructor() { }

  ngOnInit() {
  }

}
