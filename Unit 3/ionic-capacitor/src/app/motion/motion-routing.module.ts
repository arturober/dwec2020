import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotionPage } from './motion.page';

const routes: Routes = [
  {
    path: '',
    component: MotionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotionPageRoutingModule {}
