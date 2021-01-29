import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacebookLoginPage } from './facebook-login.page';

const routes: Routes = [
  {
    path: '',
    component: FacebookLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacebookLoginPageRoutingModule {}
