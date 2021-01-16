import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.page.html',
  styleUrls: ['./skeleton.page.scss'],
})
export class SkeletonPage implements OnInit {
  data = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.data = true, 3000);
  }

}
