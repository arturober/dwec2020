import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MapComponent } from 'ngx-mapbox-gl';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit, AfterViewInit {
  lat = 0;
  lng = 0;
  @ViewChild(MapComponent) mapComp: MapComponent;

  constructor() { }

  async ngOnInit() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.lat = coordinates.coords.latitude;
    this.lng = coordinates.coords.longitude;
  }

  ngAfterViewInit() {
    this.mapComp.load.subscribe(
      () => {
        this.mapComp.mapInstance.resize(); // Necessary for full height
      }
    );
  }
}
