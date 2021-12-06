import { Observable, Subscription } from 'rxjs';
import { Card, Filter } from 'src/app/shared/interfaces';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CardsService } from 'src/app/shared/services/cards.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit, OnDestroy {
  @Input() searchValue: string;
  @Input() sortValue: string;
  @Input() personFilter: Filter;
  getAllSubscription: Subscription;
  cards: Card[];

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.getAllSubscription = this.cardsService
      .getAll()
      .subscribe((response) => {
        this.cards = response;
      });
  }

  myfilter(cards: Card[]): Card[] {
    const { brands, memories, price, display, camera } = this.personFilter;
    return cards.filter((card) => {
      return (
        card.price >= price.min &&
        card.price <= price.max &&
        card.display >= display.min &&
        card.display <= display.max &&
        card.camera >= camera.min &&
        card.camera <= camera.max &&
        brands.some((brand) => brand === card.brand) &&
        memories.some((memory) => +memory === +card.memory)
      );
    });
  }

  ngOnDestroy(): void {
    if (this.getAllSubscription) {
      this.getAllSubscription.unsubscribe();
    }
  }
}
