import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  transform(products: Product[], search: string): unknown {
    if (!search) { return products; }
    return products.filter(p => p.description.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }

}
