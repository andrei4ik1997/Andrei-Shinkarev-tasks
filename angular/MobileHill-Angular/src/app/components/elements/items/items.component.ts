import { Observable } from 'rxjs';
import { Card } from 'src/app/shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/shared/cards.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  cards$: Observable<Card[]>;
  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.cards$ = this.cardsService.getAll();
  }
}
