import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ShopActions } from 'src/app/store/shop.actions';
import { ShopSelectors } from 'src/app/store/shop.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss','../../../../adaptiv.scss'],
})
export class SearchComponent {
  faSearch = faSearch;
  searchInput: string = '';
  search$: Observable<string>;

  constructor(private store$: Store) {
    this.search$ = this.store$.select(ShopSelectors.search);
  }

  onChangeSearchInput() {
    this.store$.dispatch(
      ShopActions.modifySearch({ value: this.searchInput })
    );
  }
}
