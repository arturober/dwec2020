import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeyboardPageRoutingModule } from './keyboard-routing.module';

import { KeyboardPage } from './keyboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeyboardPageRoutingModule
  ],
  declarations: [KeyboardPage]
})
export class KeyboardPageModule {}
