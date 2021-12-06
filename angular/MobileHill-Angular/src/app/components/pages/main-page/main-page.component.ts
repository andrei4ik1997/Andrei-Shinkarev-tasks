import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  searchValue: string = '';
  sortValue: string;
  personFilter: Filter;
  priceFilter: number

  setSearchValue(value: string) {
    this.searchValue = value;
  }
  setSortValue(value: string) {
    this.sortValue = value;
  }
  setPersonFilter(filter: Filter) {
    this.personFilter = filter;
  }

  setPriceFilter(price: number) {
    this.priceFilter = price;
  }
  constructor() {}

  ngOnInit(): void {}
}
