import { Subscription } from 'rxjs';
import { CardsService } from './../../../shared/cards.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from 'src/app/shared/interfaces';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  cards: Card[] = [];
  loading: boolean = false;
  getAllSubscription: Subscription;
  deleteSubscription: Subscription;
  searchInput: string = '';

  constructor(
    private cardsService: CardsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.getAll();
  }

  getAll() {
    this.getAllSubscription = this.cardsService
      .getAll()
      .subscribe((response) => {
        this.cards = response;
        this.loading = false;
      });
  }

  delete(id: string) {
    this.deleteSubscription = this.cardsService.delete(id).subscribe(() => {
      this.getAll();
      this.toastr.error('Card delete', 'Delete');
    });
  }

  ngOnDestroy() {
    if (this.getAllSubscription) {
      this.getAllSubscription.unsubscribe();
    }
    if (this.deleteSubscription) {
      this.deleteSubscription.unsubscribe();
    }
  }
}
