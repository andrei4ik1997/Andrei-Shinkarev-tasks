import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  faMinusCircle,
  faTimesCircle,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { CardsService } from 'src/app/shared/services/cards.service';
import { Card, Order } from 'src/app/shared/interfaces';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/shared/services/order.service';
@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss'],
})
export class BasketPageComponent implements OnInit, OnDestroy {
  faPlusCircle = faPlusCircle;
  faTimesCircle = faTimesCircle;
  faMinusCircle = faMinusCircle;

  cartProducts: Card[];
  totalPrice: number = 0;
  getOrderSubscription: Subscription;
  form: FormGroup;
  submitted: boolean = false;
  confirmed: boolean = false;

  constructor(
    private cardsService: CardsService,
    private orderService: OrderService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.cardsService.cartProducts;
    for (let i = 0; i < this.cartProducts.length; i++) {
      console.log(this.cartProducts[i]);
      this.totalPrice +=
        Number(this.cartProducts[i].price) * Number(this.cartProducts[i].count);
    }

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      adress: new FormControl(null, Validators.required),
      payment: new FormControl('', Validators.required),
    });
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
      orders: this.cartProducts,
      price: this.totalPrice,
      date: new Date(),
    };
    this.getOrderSubscription = this.orderService
      .create(order)
      .subscribe(() => {
        this.form.reset();
        this.submitted = false;
        this.cartProducts = [];
        this.cardsService.cartProducts = [];
        this.toastr.success('Order create', 'Order');
      });
  }

  delete(product: Card) {
    this.totalPrice -= +product.price * +product.count;
    this.cartProducts = this.cartProducts.filter((item: Card) => {
      return item.id !== product.id;
    });
    this.cardsService.cartProducts = this.cartProducts;
  }
  minusCount(product: Card) {
    const indexBasket = this.cartProducts.findIndex(
      (item) => item.id === product.id
    );
    this.cartProducts[indexBasket].count =
      +this.cartProducts[indexBasket].count - 1;
    this.totalPrice -= +product.price;
    this.cardsService.cartProducts = this.cartProducts;
  }
  plusCount(product: Card) {
    const indexBasket = this.cartProducts.findIndex(
      (item) => item.id === product.id
    );
    this.cartProducts[indexBasket].count =
      +this.cartProducts[indexBasket].count + 1;
    this.totalPrice += +product.price;
    this.cardsService.cartProducts = this.cartProducts;
  }

  ngOnDestroy() {
    if (this.getOrderSubscription) {
      this.getOrderSubscription.unsubscribe();
    }
  }
}
