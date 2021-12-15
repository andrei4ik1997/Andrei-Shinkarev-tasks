import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CallBack } from 'src/app/shared/interfaces';
import { CallBackService } from './../../../shared/services/callBack.service';

@Component({
  selector: 'app-call-back-page',
  templateUrl: './call-back-page.component.html',
  styleUrls: ['./call-back-page.component.scss'],
})
export class CallBackPageComponent implements OnInit, OnDestroy {
  callBack: CallBack[] = [];
  loading: boolean = false;
  getAllSubscription: Subscription;
  deleteSubscription: Subscription;

  constructor(private callBackService: CallBackService) {}

  ngOnInit(): void {
    this.loading = true;
    this.getAll();
  }

  getAll() {
    this.getAllSubscription = this.callBackService
      .getAll()
      .subscribe((response) => {
        this.callBack = response;
        this.loading = false;
      });
  }

  delete(id: string) {
    this.loading = true;
    this.deleteSubscription = this.callBackService.delete(id).subscribe(() => {
      this.getAll();
    });
  }

  ngOnDestroy() {
    if (this.getAllSubscription) {
      this.getAllSubscription.unsubscribe();
    }
    if (this.deleteSubscription) {
      this.deleteSubscription.unsubscribe();
    }
  }
}
