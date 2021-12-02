import { Card } from 'src/app/shared/interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCards',
})
export class SearchPipe implements PipeTransform {
  transform(cards: Card[], search = ''): Card[] {
    if (!search.trim()) {
      return cards;
    }
    return cards.filter((card) => {
      return card.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    });
  }
}
