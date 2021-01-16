import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirtualScrollPage } from './virtual-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: VirtualScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualScrollPageRoutingModule {}
