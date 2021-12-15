import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  faArrowLeft,
  faCheck,
  faToolbox,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { NgxGalleryImageSize, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';

import { Product } from 'src/app/shared/interfaces';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ShopActions } from 'src/app/store/shop.actions';
import { ShopSelectors } from 'src/app/store/shop.selectors';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss', '../../../../adaptiv.scss'],
})
export class ProductPageComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faCheck = faCheck;
  faToolbox = faToolbox;
  faTruck = faTruck;
  product: Product;
  basket: Product[];
  galleryOptions: NgxGalleryOptions[] = [
    {
      width: '30%',
      height: 'auto',
      imageArrows: true,
      imageDescription: false,
      imagePercent: 100,
      imageAutoPlay: true,
      imageAutoPlayInterval: 5000,
      imageAnimation: NgxGalleryAnimation.Slide,
      imageSize: NgxGalleryImageSize.Contain,
      thumbnailsColumns: 3,
      thumbnailsArrowsAutoHide: true,
      thumbnailSize: NgxGalleryImageSize.Contain,
      previewKeyboardNavigation: true,
      previewZoom: true,
    },
  ];
  galleryImages: NgxGalleryImage[];

  constructor(
    private route: ActivatedRoute,
    public productsService: ProductsService,
    private store$: Store,
    private toastr: ToastrService
  ) {
    this.store$.select(ShopSelectors.basket).subscribe((basket) => {
      this.basket = basket;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      return this.productsService
        .getById(params.id)
        .subscribe((product: Product) => {
          this.product = product;
          this.galleryImages = this.product.images.map((src) => {
            return {
              small: src,
              medium: src,
              big: src,
            };
          });
        });
    });
  }

  addProduct(product: Product) {
    this.store$.dispatch(ShopActions.addInBasket({ product: product }));
    this.toastr.success(`Add to basket ${product.name}`, 'Add', {
      positionClass: 'toast-bottom-right',
    });
  }

  productInBasket(id: string) {
    const index = this.basket.findIndex((product) => product.id === id);
    if (index === -1) {
      return 0;
    }
    return this.basket[index].count;
  }
}
