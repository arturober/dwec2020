import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from '../rating/rating.module';
import { ValidatorsModule } from '../validators/validators.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductsFilterPipe,
    ProductFormComponent,
    ProductItemComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    RatingModule,
    ValidatorsModule
  ],
  exports: []
})
export class ProductsModule { }
