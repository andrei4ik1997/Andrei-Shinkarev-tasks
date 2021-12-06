import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Filter } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  brands: string[] = [
    'Samsung',
    'Apple',
    'Xiaomi',
    'HONOR',
    'POCO',
    'Huawei',
    'Realme',
    'OnePlus',
    'Google',
    'Nokia',
    'Asus',
  ];
  memories: string[] = ['16', '32', '64', '128', '256', '512'];
  filter: Filter = {
    brands: [],
    memories: [],
    price: { min: 0, max: 99999 },
    display: { min: 0, max: 99999 },
    camera: { min: 0, max: 999999 },
  };
  form: FormGroup;

  @Output() personFilter: EventEmitter<Filter> = new EventEmitter<Filter>();

  constructor() {}

  ngOnInit(): void {
    this.personFilter.emit({
      ...this.filter,
      brands: this.brands,
      memories: this.memories,
    });
  }

  setFilter(event: any) {
    const { name, id, checked, value } = event.target;
    switch (name) {
      case 'brand':
        if (checked) {
          this.filter.brands.push(value);
        } else {
          this.filter.brands = this.filter.brands.filter(
            (brand) => brand !== value
          );
        }

        break;
      case 'memory':
        if (checked) {
          this.filter.memories.push(value);
        } else {
          this.filter.memories = this.filter.memories.filter(
            (memory) => memory !== value
          );
        }
        break;
      case 'price':
        if (id === 'minPrice') {
          this.filter.price.min = +value;
        }
        if (id === 'maxPrice') {
          if (!value) {
            this.filter.price.max = 99999;
          } else this.filter.price.max = +value;
        }
        break;
      case 'display':
        if (id === 'minDisplay') {
          this.filter.display.min = +value;
        }
        if (id === 'maxDisplay') {
          if (!value) {
            this.filter.display.max = 99999;
          } else this.filter.display.max = value;
        }
        break;
      case 'camera':
        if (id === 'minCamera') {
          this.filter.camera.min = +value;
        }
        if (id === 'maxCamera') {
          if (!value) {
            this.filter.camera.max = 99999;
          } else this.filter.camera.max = value;
        }
        break;
    }

    if (this.filter.brands.length === 0 && this.filter.memories.length === 0) {
      this.personFilter.emit({
        ...this.filter,
        brands: this.brands,
        memories: this.memories,
      });
    } else if (this.filter.brands.length === 0) {
      this.personFilter.emit({
        ...this.filter,
        brands: this.brands,
      });
    } else if (this.filter.memories.length === 0) {
      this.personFilter.emit({
        ...this.filter,
        memories: this.memories,
      });
    } else {
      this.personFilter.emit(this.filter);
    }
  }
}
