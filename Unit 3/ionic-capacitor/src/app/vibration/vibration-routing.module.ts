import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VibrationPage } from './vibration.page';

const routes: Routes = [
  {
    path: '',
    component: VibrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VibrationPageRoutingModule {}
