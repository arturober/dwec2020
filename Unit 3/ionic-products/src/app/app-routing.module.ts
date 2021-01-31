import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginActivateGuard } from './guards/login-activate.guard';
import { LogoutActivateGuard } from './guards/logout-activate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
    canActivate: [LogoutActivateGuard] 
  },
  { 
    path: 'products', 
    loadChildren: () => import('./products/products.module').then( m => m.ProductsModule),
    canActivate: [LoginActivateGuard] 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
