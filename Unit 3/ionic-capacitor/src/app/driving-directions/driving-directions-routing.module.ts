import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrivingDirectionsPage } from './driving-directions.page';

const routes: Routes = [
  {
    path: '',
    component: DrivingDirectionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrivingDirectionsPageRoutingModule {}
