import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.page.html',
  styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {
  type = 'heroes';
  heroes: string[] = ['Batman', 'Superman', 'Spiderman', 'Hulk', 'Mazinger Z'];
  villains: string[] = ['Dr Eggman', 'The Joker', 'Darth Vader', 'Hanniba Lecter'];
  weapons: string[] = ['Missile', 'Laser gun', 'Tank', 'X Rays'];

  constructor() { }

  ngOnInit() {
  }

  typeChanged() {
    console.log(`New type selected: ${this.type}`);
  }

}
