import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Order } from './../../../shared/interfaces';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
  orders: Order[] = [];
  loading: boolean = false;
  getAllSubscription: Subscription;
  deleteSubscription: Subscription;
  searchInput: string = '';

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loading = true;
    this.getAll();
  }

  getAll() {
    this.getAllSubscription = this.orderService
      .getAll()
      .subscribe((response) => {
        this.orders = response;
        this.loading = false;
      });
  }

  delete(id: string) {
    this.loading = true;
    this.deleteSubscription = this.orderService.delete(id).subscribe(() => {
      this.getAll();
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
