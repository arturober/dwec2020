import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLeaveGuard } from '../guards/page-leave.guard';
import { ProductIdGuard } from './guards/product-id.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailResolver } from './resolvers/product-detail.resolver';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: 'add',
    component: ProductFormComponent,
    canDeactivate: [PageLeaveGuard]
  },
  {
    path: ':id',
    component: ProductDetailComponent,
    canActivate: [ProductIdGuard],
    resolve: {
      product: ProductDetailResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
