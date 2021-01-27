import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotionPageRoutingModule } from './motion-routing.module';

import { MotionPage } from './motion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotionPageRoutingModule
  ],
  declarations: [MotionPage]
})
export class MotionPageModule {}
