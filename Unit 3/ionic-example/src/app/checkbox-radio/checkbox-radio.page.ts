import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-radio',
  templateUrl: './checkbox-radio.page.html',
  styleUrls: ['./checkbox-radio.page.scss'],
})
export class CheckboxRadioPage implements OnInit {
  sausage = false;
  mushrooms = true;
  relationship = 'friends';

  constructor() { }

  ngOnInit() {
  }

}
