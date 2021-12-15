import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  faMinusCircle,
  faTimesCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

import { Product, Order } from 'src/app/shared/interfaces';
import { OrderService } from 'src/app/shared/services/order.service';
import { ShopSelectors } from 'src/app/store/shop.selectors';
import { ShopActions } from 'src/app/store/shop.actions';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss', '../../../../adaptiv.scss'],
})
export class BasketPageComponent implements OnInit, OnDestroy {
  faPlusCircle = faPlusCircle;
  faTimesCircle = faTimesCircle;
  faMinusCircle = faMinusCircle;

  totalPrice: number;
  getBasket: Subscription;
  basket: Product[] = [];
  getOrderSubscription: Subscription;
  form: FormGroup;
  submitted: boolean = false;
  confirmed: boolean = false;

  constructor(
    private orderService: OrderService,
    private toastr: ToastrService,
    private store$: Store
  ) {
    this.getBasket = this.store$
      .select(ShopSelectors.basket)
      .subscribe((basket) => {
        this.basket = basket;
        this.totalPrice = this.price();
      });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      city: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('^(\\([0-9]{3}\\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$'),
      ]),
      adress: new FormControl(null, Validators.required),
      payment: new FormControl('', Validators.required),
      commentary: new FormControl(''),
    });
  }

  price(): number {
    return this.basket.reduce((accumulator, currentValue) => {
      return accumulator + +currentValue.count * +currentValue.price;
    }, 0);
  }

  isConfirmed() {
    this.confirmed = true;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const order: Order = {
      ...this.form.value,
      products: this.basket,
      price: this.totalPrice,
      date: new Date(),
    };
    this.getOrderSubscription = this.orderService
      .create(order)
      .subscribe(() => {
        this.form.reset();
        this.store$.dispatch(ShopActions.clearBasket());
        this.submitted = false;
        this.toastr.success('Order create', 'Order');
      });
  }

  delete(product: Product) {
    this.store$.dispatch(
      ShopActions.deleteProductInBasket({ product: product })
    );
  }
  minusCount(product: Product) {
    this.store$.dispatch(
      ShopActions.minusProductInBasket({ product: product })
    );
  }
  plusCount(product: Product) {
    this.store$.dispatch(ShopActions.plusProductInBasket({ product: product }));
  }

  ngOnDestroy() {
    if (this.getOrderSubscription) {
      this.getOrderSubscription.unsubscribe();
    }
    if (this.getBasket) {
      this.getBasket.unsubscribe();
    }
  }
}
