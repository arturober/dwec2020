import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  itemList = ["Sliding 1", "Sliding 2", "Sliding 3"];

  constructor() { }

  ngOnInit() {
  }

  close(slidingItem: IonItemSliding) {
    slidingItem.close();
  }

  showRightOptions(slidingItem: IonItemSliding) {
    slidingItem.open('end');
  }
}
