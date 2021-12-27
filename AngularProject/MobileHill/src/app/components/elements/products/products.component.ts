import { ShopActions } from 'src/app/store/shop.actions';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';

import { Product, Filter } from 'src/app/shared/interfaces';
import { ShopSelectors } from 'src/app/store/shop.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss', '../../../../adaptiv.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  sort$: Observable<string>;
  search$: Observable<string>;
  filter: Filter;
  getFiter: Subscription;
  getProducts: Subscription;
  products: Product[];
  page: number = 1;

  constructor(private store$: Store) {
    this.getProducts = this.store$
      .select(ShopSelectors.products)
      .subscribe((products) => {
        this.products = products;
      });
    this.getFiter = this.store$
      .select(ShopSelectors.filter)
      .subscribe((filter) => {
        this.filter = filter;
      });
    this.sort$ = this.store$.select(ShopSelectors.sort);
    this.search$ = this.store$.select(ShopSelectors.search);
  }

  ngOnInit(): void {
    this.store$.dispatch(ShopActions.getProducts());
  }

  setPage(value: number) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 10);
    this.page = value;
  }

  myfilter(products: Product[]): Product[] {
    const { brands, memories, price, display, camera } = this.filter;
    return products.filter((product) => {
      return (
        product.price >= price.min &&
        product.price <= price.max &&
        product.display >= display.min &&
        product.display <= display.max &&
        product.camera >= camera.min &&
        product.camera <= camera.max &&
        brands.some((brand) => brand === product.brand) &&
        memories.some((memory) => +memory === +product.memory)
      );
    });
  }

  ngOnDestroy(): void {
    if (this.getFiter) {
      this.getFiter.unsubscribe();
    }
    if (this.getProducts) {
      this.getProducts.unsubscribe();
    }
  }
}
