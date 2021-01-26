import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocationPageRoutingModule } from './geolocation-routing.module';

import { GeolocationPage } from './geolocation.page';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocationPageRoutingModule,
    NgxMapboxGLModule
  ],
  declarations: [GeolocationPage]
})
export class GeolocationPageModule {}
