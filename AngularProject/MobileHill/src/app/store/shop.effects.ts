import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';

import { ShopActions } from 'src/app/store/shop.actions';
import { ProductsService } from '../shared/services/products.service';

@Injectable()
export class ShopEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShopActions.getProducts),
      mergeMap(() =>
        this.productsService.getAll().pipe(
          map((products) => {
            return ShopActions.getProductsSuccess({ products: products });
          })
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
