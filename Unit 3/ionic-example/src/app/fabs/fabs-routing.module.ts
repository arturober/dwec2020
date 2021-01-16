import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabsPage } from './fabs.page';

const routes: Routes = [
  {
    path: '',
    component: FabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabsPageRoutingModule {}
