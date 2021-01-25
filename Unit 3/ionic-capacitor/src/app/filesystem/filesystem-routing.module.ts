import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilesystemPage } from './filesystem.page';

const routes: Routes = [
  {
    path: '',
    component: FilesystemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilesystemPageRoutingModule {}
