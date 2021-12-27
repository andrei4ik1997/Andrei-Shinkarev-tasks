import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './shop.reducer';

export namespace ShopSelectors {
  export const state = createFeatureSelector<State>('shop');
  export const filter = createSelector(state, (state) => state.filter);
  export const sort = createSelector(state, (state) => state.sort);
  export const search = createSelector(state, (state) => state.search);
  export const products = createSelector(state, (state) => state.products);
  export const basket = createSelector(state, (state) => state.basket);
}
