import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Product } from 'src/app/shared/interfaces';
import { ProductsService } from '../../../shared/services/products.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss','../../../../adaptiv.scss'],
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;

  constructor(
    private productsService: ProductsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      category: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      articul: new FormControl(null, Validators.required),
      price: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*[.,]?[0-9]+$'),
      ]),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
      images: new FormGroup({
        image: new FormControl(null, Validators.required),
        imageArray: new FormArray([]),
      }),
      display: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*[.,]?[0-9]+$'),
      ]),
      memory: new FormControl('', Validators.required),
      camera: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*[.,]?[0-9]+$'),
      ]),
      description: new FormControl(null),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const product: Product = {
      ...this.form.value,
      images: Object.values(this.form.value.images).flat(),
      date: new Date(),
    };

    this.productsService.create(product).subscribe(() => {
      this.form.reset();
      this.toastr.success('Product add', 'Add');
    });

    this.getImageArray().clear();
  }

  addInput() {
    const imageControl = new FormControl('', Validators.required);
    this.getImageArray().push(imageControl);
  }
  deleteInput() {
    this.getImageArray().removeAt(this.getImageArray().length - 1);
  }
  getImageArray() {
    return this.form.get('images').get('imageArray') as FormArray;
  }
}
