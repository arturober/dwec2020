import { Component, OnInit } from '@angular/core';
import { Plugins, DeviceInfo, DeviceBatteryInfo } from '@capacitor/core';
const { Device } = Plugins;

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
  info: DeviceInfo;
  battery: DeviceBatteryInfo;

  constructor() { }

  async ngOnInit() {
    this.info = await Device.getInfo();
    this.battery = await Device.getBatteryInfo();
  }
}
