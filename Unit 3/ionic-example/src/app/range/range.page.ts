import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
})
export class RangePage implements OnInit {
  range1 = 50;
  dualRange = {
    lower: 20,
    upper: 70
  };

  constructor() { }

  ngOnInit() {
  }

}
