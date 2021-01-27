import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeyboardPage } from './keyboard.page';

const routes: Routes = [
  {
    path: '',
    component: KeyboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeyboardPageRoutingModule {}
