import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { ProductsService } from '../../../shared/services/products.service';
import { Product } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  loading: boolean = false;
  getAllSubscription: Subscription;
  deleteSubscription: Subscription;
  searchInput: string = '';

  constructor(
    private productsService: ProductsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.getAll();
  }

  getAll() {
    this.getAllSubscription = this.productsService
      .getAll()
      .subscribe((response) => {
        this.products = response;
        this.loading = false;
      });
  }

  delete(id: string) {
    this.deleteSubscription = this.productsService.delete(id).subscribe(() => {
      this.getAll();
      this.toastr.error('Product delete', 'Delete');
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
