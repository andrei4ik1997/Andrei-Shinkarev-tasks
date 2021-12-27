import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { Product } from 'src/app/shared/interfaces';
import { ProductsService } from '../../../shared/services/products.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  product: Product;
  submitted: boolean = false;
  updateSubscription: Subscription;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      return this.productsService
        .getById(params.id)
        .subscribe((product: Product) => {
          this.product = product;
          this.form = new FormGroup({
            name: new FormControl(product.name, Validators.required),
            category: new FormControl(product.category, Validators.required),
            brand: new FormControl(product.brand, Validators.required),
            articul: new FormControl(product.articul, Validators.required),
            price: new FormControl(product.price, [
              Validators.required,
              Validators.pattern('^[0-9]*[.,]?[0-9]+$'),
            ]),
            amount: new FormControl(product.amount, [
              Validators.required,
              Validators.pattern('^[0-9]+$'),
            ]),
            images: new FormArray([]),
            display: new FormControl(product.display, [
              Validators.required,
              Validators.pattern('^[0-9]*[.,]?[0-9]+$'),
            ]),
            memory: new FormControl(product.memory, [Validators.required]),
            camera: new FormControl(product.camera, [
              Validators.required,
              Validators.pattern('^[0-9]*[.,]?[0-9]+$'),
            ]),
            description: new FormControl(product.description),
          });
          this.product.images.forEach((image) => {
            this.addInput(image);
          });
        });
    });
  }

  addInput(initValue: string = '') {
    const imageControl = new FormControl(initValue, Validators.required);
    this.getImageArray().push(imageControl);
  }
  deleteInput() {
    this.getImageArray().removeAt(this.getImageArray().length - 1);
  }
  getImageArray() {
    return this.form.get('images') as FormArray;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;
    this.updateSubscription = this.productsService
      .update({
        ...this.product,
        ...this.form.value,
      })
      .subscribe(() => {
        this.submitted = false;
        this.toastr.success('Product update successful', 'Update');
      });
  }

  ngOnDestroy(): void {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }
}
