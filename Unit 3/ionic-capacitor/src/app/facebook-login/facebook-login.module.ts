import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacebookLoginPageRoutingModule } from './facebook-login-routing.module';

import { FacebookLoginPage } from './facebook-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacebookLoginPageRoutingModule
  ],
  declarations: [FacebookLoginPage]
})
export class FacebookLoginPageModule {}
