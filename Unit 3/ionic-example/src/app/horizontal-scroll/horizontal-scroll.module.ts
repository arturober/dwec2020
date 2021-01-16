import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorizontalScrollPageRoutingModule } from './horizontal-scroll-routing.module';

import { HorizontalScrollPage } from './horizontal-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorizontalScrollPageRoutingModule
  ],
  declarations: [HorizontalScrollPage]
})
export class HorizontalScrollPageModule {}
