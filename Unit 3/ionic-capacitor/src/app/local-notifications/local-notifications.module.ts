import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalNotificationsPageRoutingModule } from './local-notifications-routing.module';

import { LocalNotificationsPage } from './local-notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalNotificationsPageRoutingModule
  ],
  declarations: [LocalNotificationsPage]
})
export class LocalNotificationsPageModule {}
