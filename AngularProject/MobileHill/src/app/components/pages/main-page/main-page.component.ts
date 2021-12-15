import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { ShopActions } from 'src/app/store/shop.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss', '../../../../adaptiv.scss'],
})
export class MainPageComponent implements OnDestroy {
  constructor(private store$: Store) {}
  ngOnDestroy(): void {
    this.store$.dispatch(ShopActions.initialValues());
  }
}
