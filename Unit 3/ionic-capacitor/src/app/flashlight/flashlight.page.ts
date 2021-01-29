import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
declare let window: any;

@Component({
  selector: 'app-flashlight',
  templateUrl: './flashlight.page.html',
  styleUrls: ['./flashlight.page.scss'],
})
export class FlashlightPage implements OnDestroy {
  on = false;

  constructor(private ngZone: NgZone) { }

  async toggleFlash() {
    await window.plugins.flashlight.toggle(() => {
      this.ngZone.run(() => this.on = window.plugins.flashlight.isSwitchedOn());
    });
  }

  ngOnDestroy() {
    window.plugins.flashlight.switchOff();
  }
}
