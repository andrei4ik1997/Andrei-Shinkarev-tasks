import { createAction, props } from '@ngrx/store';

import { Product } from './../shared/interfaces';

export namespace ShopActions {
  export const initialFilter = createAction('INITIAL_FITER');
  export const addBrand = createAction('ADD_BRAND', props<{ brand: string }>());
  export const removeBrand = createAction(
    'REMOVE_BRAND',
    props<{ brand: string }>()
  );
  export const addMemory = createAction(
    'ADD_MEMORY',
    props<{ memory: string }>()
  );
  export const removeMemory = createAction(
    'REMOVE_MEMORY',
    props<{ memory: string }>()
  );
  export const modifyPrice = createAction(
    'MODIFY_PRICE',
    props<{ minPrice?: number; maxPrice?: number }>()
  );
  export const modifyDisplay = createAction(
    'MODIFY_DISPLAY',
    props<{ minDisplay?: number; maxDisplay?: number }>()
  );
  export const modifyCamera = createAction(
    'MODIFY_CAMERA',
    props<{ minCamera?: number; maxCamera?: number }>()
  );
  export const modifySort = createAction(
    'MODIFY_SORT',
    props<{ value: string }>()
  );
  export const modifySearch = createAction(
    'MODIFY_SEARCH',
    props<{ value: string }>()
  );
  export const initialValues = createAction('INITIAL_VALUES');
  export const getProducts = createAction('GET_PRODUCTS');
  export const getProductsSuccess = createAction(
    'GET_PRODUCTS_SUCCESS',
    props<{ products: Product[] }>()
  );
  export const addInBasket = createAction(
    'ADD_IN_BASKET',
    props<{ product: Product }>()
  );
  export const clearBasket = createAction('CLEAR_BASKET');
  export const deleteProductInBasket = createAction(
    'DELETE_PRODUCT_IN_BASKET',
    props<{ product: Product }>()
  );
  export const minusProductInBasket = createAction(
    'MINUS_PRODUCT_IN_BASKET',
    props<{ product: Product }>()
  );
  export const plusProductInBasket = createAction(
    'PLUS_PRODUCT_IN_BASKET',
    props<{ product: Product }>()
  );
}
