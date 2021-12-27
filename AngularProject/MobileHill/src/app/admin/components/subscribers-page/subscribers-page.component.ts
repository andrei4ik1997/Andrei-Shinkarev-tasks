import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SubscribeService } from 'src/app/shared/services/subscribe.service';
import { Subscribe } from './../../../shared/interfaces';

@Component({
  selector: 'app-subscribers-page',
  templateUrl: './subscribers-page.component.html',
  styleUrls: ['./subscribers-page.component.scss'],
})
export class SubscribersPageComponent implements OnInit, OnDestroy {
  subscribes: Subscribe[] = [];
  loading: boolean = false;
  getAllSubscription: Subscription;
  constructor(private subscribeService: SubscribeService) {}

  ngOnInit(): void {
    this.loading = true;
    this.getAll();
  }
  getAll() {
    this.getAllSubscription = this.subscribeService
      .getAll()
      .subscribe((response) => {
        this.subscribes = response;
        this.loading = false;
      });
  }
  ngOnDestroy() {
    if (this.getAllSubscription) {
      this.getAllSubscription.unsubscribe();
    }
  }
}
