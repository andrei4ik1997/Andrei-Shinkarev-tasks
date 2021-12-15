import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ShopActions } from 'src/app/store/shop.actions';
import { brands, memories } from 'src/app/shared/values';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss','../../../../adaptiv.scss'],
})
export class FilterComponent implements OnInit {
  brands: string[] = brands;
  memories: string[] = memories;

  constructor(private store$: Store) {}

  ngOnInit(): void {}

  initialFilter(form: NgForm) {
    this.store$.dispatch(ShopActions.initialFilter());
    form.reset();
  }

  setFilter(event: Event) {
    const { name, id, checked, value } = event.target as HTMLInputElement;
    switch (name) {
      case 'brand':
        if (checked) {
          this.store$.dispatch(ShopActions.addBrand({ brand: value }));
        } else {
          this.store$.dispatch(ShopActions.removeBrand({ brand: value }));
        }

        break;
      case 'memory':
        if (checked) {
          this.store$.dispatch(ShopActions.addMemory({ memory: value }));
        } else {
          this.store$.dispatch(ShopActions.removeMemory({ memory: value }));
        }
        break;
      case 'price':
        if (id === 'minPrice') {
          if (!value) {
            this.store$.dispatch(ShopActions.modifyPrice({ minPrice: 0 }));
          } else {
            this.store$.dispatch(ShopActions.modifyPrice({ minPrice: +value }));
          }
        }
        if (id === 'maxPrice') {
          if (!value) {
            this.store$.dispatch(ShopActions.modifyPrice({ maxPrice: 99999 }));
          } else {
            this.store$.dispatch(ShopActions.modifyPrice({ maxPrice: +value }));
          }
        }
        break;
      case 'display':
        if (id === 'minDisplay') {
          if (!value) {
            this.store$.dispatch(ShopActions.modifyDisplay({ minDisplay: 0 }));
          } else {
            this.store$.dispatch(
              ShopActions.modifyDisplay({ minDisplay: +value })
            );
          }
        }
        if (id === 'maxDisplay') {
          if (!value) {
            this.store$.dispatch(
              ShopActions.modifyDisplay({ maxDisplay: 99999 })
            );
          } else {
            this.store$.dispatch(
              ShopActions.modifyDisplay({ maxDisplay: +value })
            );
          }
        }
        break;
      case 'camera':
        if (id === 'minCamera') {
          if (!value) {
            this.store$.dispatch(ShopActions.modifyCamera({ minCamera: 0 }));
          } else {
            this.store$.dispatch(
              ShopActions.modifyCamera({ minCamera: +value })
            );
          }
        }
        if (id === 'maxCamera') {
          if (!value) {
            this.store$.dispatch(
              ShopActions.modifyCamera({ maxCamera: 99999 })
            );
          } else {
            this.store$.dispatch(
              ShopActions.modifyCamera({ maxCamera: +value })
            );
          }
        }
        break;
    }
  }
}
