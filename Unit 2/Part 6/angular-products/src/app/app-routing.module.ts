import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsModule } from './products/products.module';

const APP_ROUTES: Route[] = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  // :id is a parameter (product's id)
  // Default route (empty) -> Redirect to welcome page
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  // Doesn't match any of the above
  { path: '**', redirectTo: '/welcome' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
