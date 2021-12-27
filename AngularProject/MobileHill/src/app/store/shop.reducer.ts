import { Action, createReducer, on } from '@ngrx/store';

import { Product } from './../shared/interfaces';
import {
  brands as initialBrands,
  memories as initialMemories,
} from '../shared/values';
import { ShopActions } from './shop.actions';

export interface State {
  filter: {
    brands: string[];
    memories: string[];
    price: { min: number; max: number };
    display: { min: number; max: number };
    camera: { min: number; max: number };
  };
  sort: string;
  search: string;
  products: Product[];
  basket: Product[];
}

const initialState: State = {
  filter: {
    brands: initialBrands,
    memories: initialMemories,
    price: { min: 0, max: 99999 },
    display: { min: 0, max: 99999 },
    camera: { min: 0, max: 999999 },
  },
  sort: 'newest',
  search: '',
  products: [],
  basket: [],
};
const shopReducer = createReducer(
  initialState,
  on(ShopActions.initialFilter, (state) => {
    return {
      ...state,
      filter: { ...initialState.filter },
    };
  }),
  on(ShopActions.addBrand, (state, { brand }) => {
    let brands = [...state.filter.brands];
    if (brands.length >= initialState.filter.brands.length) {
      brands = [];
    }
    brands.push(brand);
    const newFilter = {
      ...state.filter,
      brands: brands,
    };

    return {
      ...state,
      filter: newFilter,
    };
  }),
  on(ShopActions.removeBrand, (state, { brand }) => {
    let brands = [...state.filter.brands];
    brands = brands.filter((item) => item !== brand);
    if (!brands.length) {
      brands = initialBrands;
    }
    const newFilter = {
      ...state.filter,
      brands: brands,
    };
    return {
      ...state,
      filter: newFilter,
    };
  }),
  on(ShopActions.addMemory, (state, { memory }) => {
    let memories = [...state.filter.memories];
    if (memories.length >= initialState.filter.memories.length) {
      memories = [];
    }
    memories.push(memory);
    const newFilter = {
      ...state.filter,
      memories: memories,
    };
    return {
      ...state,
      filter: newFilter,
    };
  }),
  on(ShopActions.removeMemory, (state, { memory }) => {
    let memories = [...state.filter.memories];
    memories = memories.filter((item) => item !== memory);
    if (!memories.length) {
      memories = initialMemories;
    }
    const newFilter = {
      ...state.filter,
      memories: memories,
    };

    return {
      ...state,
      filter: newFilter,
    };
  }),
  on(ShopActions.modifyPrice, (state, { minPrice, maxPrice }) => {
    const newPrice = { ...state.filter.price };
    if (minPrice || minPrice === 0) {
      newPrice.min = minPrice;
    }
    if (maxPrice) {
      newPrice.max = maxPrice;
    }
    const newFilter = {
      ...state.filter,
      price: newPrice,
    };
    return {
      ...state,
      filter: newFilter,
    };
  }),
  on(ShopActions.modifyDisplay, (state, { minDisplay, maxDisplay }) => {
    const newDisplay = { ...state.filter.display };
    if (minDisplay || minDisplay === 0) {
      newDisplay.min = minDisplay;
    }
    if (maxDisplay) {
      newDisplay.max = maxDisplay;
    }
    const newFilter = {
      ...state.filter,
      display: newDisplay,
    };
    return {
      ...state,
      filter: newFilter,
    };
  }),
  on(ShopActions.modifyCamera, (state, { minCamera, maxCamera }) => {
    const newCamera = { ...state.filter.camera };
    if (minCamera || minCamera === 0) {
      newCamera.min = minCamera;
    }
    if (maxCamera) {
      newCamera.max = maxCamera;
    }
    const newFilter = {
      ...state.filter,
      camera: newCamera,
    };
    return {
      ...state,
      filter: newFilter,
    };
  }),
  on(ShopActions.modifySort, (state, { value }) => {
    return {
      ...state,
      sort: value,
    };
  }),
  on(ShopActions.modifySearch, (state, { value }) => {
    return {
      ...state,
      search: value,
    };
  }),

  on(ShopActions.initialValues, (state) => {
    return {
      ...state,
      ...initialState,
      basket: state.basket,
    };
  }),
  on(ShopActions.getProductsSuccess, (state, { products }) => {
    return {
      ...state,
      products: products,
    };
  }),
  on(ShopActions.addInBasket, (state, { product }) => {
    let basket: Product[] = JSON.parse(JSON.stringify(state.basket));
    if (basket.length) {
      const indexBasket = basket.findIndex((item) => item.id === product.id);
      if (indexBasket === -1) {
        basket.push({ ...product, count: 1 });
      } else {
        basket[indexBasket].count = basket[indexBasket].count + 1;
      }
    } else {
      basket.push({ ...product, count: 1 });
    }
    return {
      ...state,
      basket: basket,
    };
  }),
  on(ShopActions.clearBasket, (state) => {
    return {
      ...state,
      basket: [],
    };
  }),
  on(ShopActions.deleteProductInBasket, (state, { product }) => {
    const newBasket = [...state.basket].filter((item: Product) => {
      return item.id !== product.id;
    });
    return {
      ...state,
      basket: newBasket,
    };
  }),
  on(ShopActions.minusProductInBasket, (state, { product }) => {
    const indexBasket = [...state.basket].findIndex(
      (item) => item.id === product.id
    );
    let basket: Product[] = JSON.parse(JSON.stringify(state.basket));
    basket[indexBasket].count = basket[indexBasket].count - 1;
    return {
      ...state,
      basket: basket,
    };
  }),
  on(ShopActions.plusProductInBasket, (state, { product }) => {
    const indexBasket = [...state.basket].findIndex(
      (item) => item.id === product.id
    );
    let basket: Product[] = JSON.parse(JSON.stringify(state.basket));
    basket[indexBasket].count = basket[indexBasket].count + 1;
    return {
      ...state,
      basket: basket,
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return shopReducer(state, action);
}
