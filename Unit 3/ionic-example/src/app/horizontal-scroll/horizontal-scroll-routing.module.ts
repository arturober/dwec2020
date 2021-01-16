import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorizontalScrollPage } from './horizontal-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: HorizontalScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorizontalScrollPageRoutingModule {}
