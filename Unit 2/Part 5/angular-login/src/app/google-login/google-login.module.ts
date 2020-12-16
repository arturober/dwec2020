import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleLoginDirective } from './directives/google-login.directive';
import { CLIENT_ID } from './google-login.config';



@NgModule({
  declarations: [GoogleLoginDirective],
  imports: [
    CommonModule
  ],
  exports: [GoogleLoginDirective]
})
export class GoogleLoginModule {
  static forRoot(clientId: string): ModuleWithProviders<GoogleLoginModule> {
    return {
      ngModule: GoogleLoginModule,
      providers: [
        { provide: CLIENT_ID, useValue: clientId }
      ]
    };
  }

}
