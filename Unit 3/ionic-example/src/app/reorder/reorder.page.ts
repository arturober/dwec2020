import { Component, OnInit } from '@angular/core';
import { IonReorder } from '@ionic/angular';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {
  foods: string[] = [
    'Pizza', 'Banana', 'Hamburguer', 'Soup', 'Steak', 'Apple'
  ];
  disableOrdering = true;

  constructor() { }

  ngOnInit() {
  }

  reorder(event: CustomEvent) {
    const elemFrom = this.foods.splice(event.detail.from, 1);
    this.foods.splice(event.detail.to, 0, elemFrom[0]);
    event.detail.complete();
  }

  toggleReordering() {
    this.disableOrdering = !this.disableOrdering;
  }

}
