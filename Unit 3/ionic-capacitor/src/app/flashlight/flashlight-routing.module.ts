import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashlightPage } from './flashlight.page';

const routes: Routes = [
  {
    path: '',
    component: FlashlightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlashlightPageRoutingModule {}
