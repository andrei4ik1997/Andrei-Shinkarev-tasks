import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ShopActions } from 'src/app/store/shop.actions';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss', '../../../../adaptiv.scss'],
})
export class SortComponent implements OnInit {
  form: FormGroup;

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      sort: new FormControl('newest'),
    });

    this.form.controls['sort'].valueChanges.subscribe((value) => {
      this.store$.dispatch(ShopActions.modifySort({ value: value }));
    });
  }
}
