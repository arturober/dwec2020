import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navigation1Page } from './navigation1.page';

const routes: Routes = [
  {
    path: '',
    component: Navigation1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navigation1PageRoutingModule {}
