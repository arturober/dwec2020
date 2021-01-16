import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabsPageRoutingModule } from './fabs-routing.module';

import { FabsPage } from './fabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabsPageRoutingModule
  ],
  declarations: [FabsPage]
})
export class FabsPageModule {}
