import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MapComponent } from 'ngx-mapbox-gl';
import { Plugins } from '@capacitor/core';
import { Result } from 'ngx-mapbox-gl/lib/control/geocoder-control.directive';
const { Geolocation, StartNavigationPlugin } = Plugins;

@Component({
  selector: 'app-driving-directions',
  templateUrl: './driving-directions.page.html',
  styleUrls: ['./driving-directions.page.scss'],
})
export class DrivingDirectionsPage implements OnInit, AfterViewInit {
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

  changePosition(result: Result) {
    this.lat = result.geometry.coordinates[1];
    this.lng = result.geometry.coordinates[0];
  }

  startNavigation() {
    StartNavigationPlugin.launchMapsApp({
      latitude: this.lat,
      longitude: this.lng,
      name: 'Directions example',
    });
  }
}
