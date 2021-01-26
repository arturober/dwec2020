import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Haptics } = Plugins;

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.page.html',
  styleUrls: ['./vibration.page.scss'],
})
export class VibrationPage implements OnInit {

  constructor() { }

  ngOnInit() {}

  vibrate() {
    Haptics.vibrate();
  }
}
