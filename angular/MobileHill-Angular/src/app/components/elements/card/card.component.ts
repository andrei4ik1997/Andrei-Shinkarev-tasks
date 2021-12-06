import { Component, Input, OnInit } from '@angular/core';
import { CardsService } from 'src/app/shared/services/cards.service';
import { Card } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor(public cardsService: CardsService) {}

  ngOnInit(): void {
  }
  
  addProduct(card: Card) {
    this.cardsService.addProduct(card);
  }
}
