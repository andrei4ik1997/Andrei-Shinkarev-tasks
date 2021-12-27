import { Pipe, PipeTransform } from '@angular/core';

import { Product } from 'src/app/shared/interfaces';

@Pipe({
  name: 'sortProducts',
})
export class SortPipe implements PipeTransform {
  transform(products: Product[], sort = ''): Product[] {
    switch (sort) {
      case 'price':
        return products.sort((a, b) => {
          return +a.price - +b.price;
        });
      case 'name':
        return products.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      case 'newest':
        return products.sort((a, b) => {
          if (b.date > a.date) {
            return 1;
          }
          if (b.date < a.date) {
            return -1;
          }
          return 0;
        });
      default:
        return products;
    }
  }
}
