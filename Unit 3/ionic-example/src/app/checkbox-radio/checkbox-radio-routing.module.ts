import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxRadioPage } from './checkbox-radio.page';

const routes: Routes = [
  {
    path: '',
    component: CheckboxRadioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxRadioPageRoutingModule {}
