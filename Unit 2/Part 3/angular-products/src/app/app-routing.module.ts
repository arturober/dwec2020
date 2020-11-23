import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PageLeaveGuard } from './guards/page-leave.guard';
import { ProductIdGuard } from './guards/product-id.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailResolver } from './resolvers/product-detail.resolver';
import { WelcomeComponent } from './welcome/welcome.component';

const APP_ROUTES: Route[] = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/add',
    component: ProductFormComponent,
    canDeactivate: [PageLeaveGuard]
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    canActivate: [ProductIdGuard],
    resolve: {
      product: ProductDetailResolver
    }
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
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
