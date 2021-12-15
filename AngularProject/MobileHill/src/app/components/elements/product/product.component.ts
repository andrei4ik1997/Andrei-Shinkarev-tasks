import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';

import { Product } from 'src/app/shared/interfaces';
import { ShopActions } from 'src/app/store/shop.actions';
import { ShopSelectors } from 'src/app/store/shop.selectors';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss','../../../../adaptiv.scss'],
  animations: [
    trigger('product', [
      transition('void=>*', [
        style({
          opacity: 0,
        }),
        animate('850ms ease-out'),
      ]),
    ]),
  ],
})
export class ProductComponent {
  boxState = 'start';
  productState = '';
  @Input() product: Product;
  basket: Product[];

  constructor(private store$: Store, private toastr: ToastrService) {
    this.store$.select(ShopSelectors.basket).subscribe((basket) => {
      this.basket = basket;
    });
  }

  addProduct(product: Product) {
    this.store$.dispatch(ShopActions.addInBasket({ product: product }));
    this.toastr.success(`Add to basket ${product.name}`, 'Add', {
      positionClass: 'toast-bottom-right',
    });
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  productInBasket(id: string) {
    const index = this.basket.findIndex((product) => product.id === id);
    if (index === -1) {
      return 0;
    }
    return this.basket[index].count;
  }
}
