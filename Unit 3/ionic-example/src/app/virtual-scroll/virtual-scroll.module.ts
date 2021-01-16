import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirtualScrollPageRoutingModule } from './virtual-scroll-routing.module';

import { VirtualScrollPage } from './virtual-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirtualScrollPageRoutingModule
  ],
  declarations: [VirtualScrollPage]
})
export class VirtualScrollPageModule {}
