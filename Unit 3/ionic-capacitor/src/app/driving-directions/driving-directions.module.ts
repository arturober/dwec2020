import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrivingDirectionsPageRoutingModule } from './driving-directions-routing.module';

import { DrivingDirectionsPage } from './driving-directions.page';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrivingDirectionsPageRoutingModule,
    NgxMapboxGLModule
  ],
  declarations: [DrivingDirectionsPage]
})
export class DrivingDirectionsPageModule {}
