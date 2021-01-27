import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalNotificationsPage } from './local-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: LocalNotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalNotificationsPageRoutingModule {}
