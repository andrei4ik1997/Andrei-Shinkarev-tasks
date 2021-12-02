import { Component, Input, OnInit } from '@angular/core';
import { CardsService } from 'src/app/shared/cards.service';
import { Card } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
  }
  addProduct(card: Card) {
    this.cardsService.addProduct(card);
  }
}
