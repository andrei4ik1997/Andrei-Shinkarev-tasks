import { Pipe, PipeTransform } from '@angular/core';

import { Product } from 'src/app/shared/interfaces';

@Pipe({
  name: 'searchProducts',
})
export class SearchPipe implements PipeTransform {
  transform(products: Product[], search = ''): Product[] {
    if (!search.trim()) {
      return products;
    }
    return products.filter((product) => {
      return product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
  }
}
