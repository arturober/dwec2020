import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilesystemPageRoutingModule } from './filesystem-routing.module';

import { FilesystemPage } from './filesystem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilesystemPageRoutingModule
  ],
  declarations: [FilesystemPage]
})
export class FilesystemPageModule {}
