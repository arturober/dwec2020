import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Plugins, PluginListenerHandle, NetworkStatus } from '@capacitor/core';
const { Network } = Plugins;

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit, OnDestroy {
  type = 'none';
  connected = false;
  connHandler: PluginListenerHandle;

  constructor(private zone: NgZone) { }

  async ngOnInit() {
    this.setConnection(await Network.getStatus());

    this.connHandler = Network.addListener('networkStatusChange', status => {
      this.setConnection(status)
    });
  }

  ngOnDestroy() {
    this.connHandler.remove();
  }

  setConnection(status: NetworkStatus) {
    this.zone.run(() => {
      this.connected = status.connected;
      this.type = status.connectionType;
    });
  }
}
