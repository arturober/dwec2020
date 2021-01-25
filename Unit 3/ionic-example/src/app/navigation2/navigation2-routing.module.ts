import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navigation2Page } from './navigation2.page';

const routes: Routes = [
  {
    path: '',
    component: Navigation2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navigation2PageRoutingModule {}
