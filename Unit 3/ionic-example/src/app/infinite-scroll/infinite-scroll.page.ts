import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  items: String[] = [];
  num = 1;
  finished = false;

  constructor() { }

  ngOnInit() {
    this.loadMoreItems(null);
  }

  loadMoreItems(event) {
    // Simulating an external service call with a timeout
    setTimeout(() => {
      const max = this.num + 15;
      for (; this.num < max; this.num++) {
        this.items.push('Item ' + this.num);
      }
      if (this.num >= 120) { // We'll load a maximum of 60 items
        this.finished = true;
      }
      if (event !== null) {
        event.target.complete(); // Hide the loader
      }
    }, event === null ? 0 : 2000);
  }
}
