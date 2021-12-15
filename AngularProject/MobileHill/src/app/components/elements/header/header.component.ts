import { Product } from 'src/app/shared/interfaces';
import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ShopSelectors } from 'src/app/store/shop.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../../../adaptiv.scss'],
})
export class HeaderComponent {
  faShoppingCart = faShoppingCart;
  basket$: Observable<Product[]>;
  admin: boolean = false;

  constructor(private store$: Store) {
    this.basket$ = this.store$.select(ShopSelectors.basket);
  }
}
