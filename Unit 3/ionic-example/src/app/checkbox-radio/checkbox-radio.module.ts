import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxRadioPageRoutingModule } from './checkbox-radio-routing.module';

import { CheckboxRadioPage } from './checkbox-radio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxRadioPageRoutingModule
  ],
  declarations: [CheckboxRadioPage]
})
export class CheckboxRadioPageModule {}
