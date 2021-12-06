import { CardsService } from 'src/app/shared/services/cards.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  faArrowLeft,
  faCheck,
  faToolbox,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { Card } from 'src/app/shared/interfaces';
import { NgxGalleryImageSize, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faCheck = faCheck;
  faToolbox = faToolbox;
  faTruck = faTruck;
  loading = false;
  card: Card;
  galleryOptions: NgxGalleryOptions[] = [
    {
      width: '30%',
      height: '500px',
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
    public cardsService: CardsService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
      return this.cardsService.getById(params.id).subscribe((card: Card) => {
        this.card = card;
        this.loading = false;
        this.galleryImages = this.card.images.map((src) => {
          return {
            small: src,
            medium: src,
            big: src,
          };
        });
      });
    });
  }

  addProduct(card: Card) {
    this.cardsService.addProduct(card);
  }
}
