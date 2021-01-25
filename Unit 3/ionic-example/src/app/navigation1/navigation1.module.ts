import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navigation1PageRoutingModule } from './navigation1-routing.module';

import { Navigation1Page } from './navigation1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navigation1PageRoutingModule
  ],
  declarations: [Navigation1Page]
})
export class Navigation1PageModule {}
