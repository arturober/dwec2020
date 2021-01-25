import { Component, OnInit } from '@angular/core';
import { Plugins, DeviceInfo } from '@capacitor/core';
const { Device } = Plugins;

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
  info: DeviceInfo;

  constructor() { }

  async ngOnInit() {
    this.info = await Device.getInfo();
  }
}
