import { Card } from 'src/app/shared/interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortCards',
})
export class SortPipe implements PipeTransform {
  transform(cards: Card[], sort = ''): Card[] {
    switch (sort) {
      case 'price':
        return cards.sort((a, b) => {
          return +a.price - +b.price;
        });
      case 'name':
        return cards.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      case 'newest':
        return cards.sort((a, b) => {
          if (b.date > a.date) {
            return 1;
          }
          if (b.date < a.date) {
            return -1;
          }
          return 0;
        });
      default:
        return cards;
    }
  }
}
