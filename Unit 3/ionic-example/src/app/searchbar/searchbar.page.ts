import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  items = [
    'Banana',
    'Apple',
    'Pineapple',
    'Orange',
    'Melon',
    'Watermelon',
    'Peach',
    'Strawberry',
    'Gooseberry',
    'Blackberry',
    'Blueberry'
  ];
  filteredItems: string[];
  search = '';

  constructor() { }

  ngOnInit() {
    this.filteredItems = this.items;
  }

  filterItems() {
    if (this.search && this.search.trim() !== '') {
      this.search = this.search.trim().toLowerCase();
      this.filteredItems = this.items.filter(i =>
        i.toLowerCase().includes(this.search)
      );
    } else {
      this.filteredItems = this.items;
    }
  }
}
