import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  faShippingFast,
  faCartArrowDown,
  faPercent,
} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

import { SubscribeService } from 'src/app/shared/services/subscribe.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss', '../../../../adaptiv.scss'],
})
export class AboutPageComponent implements OnDestroy {
  faShippingFast = faShippingFast;
  faCartArrowDown = faCartArrowDown;
  faPercent = faPercent;
  form: FormGroup;
  subscribeSubscription: Subscription;
  constructor(
    private toastr: ToastrService,
    private subscribeService: SubscribeService
  ) {
    this.form = new FormGroup({
      email: new FormControl(
        '',
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
      ),
    });
  }

  subscribe() {
    if (this.form.invalid || !this.form.value.email) {
      return;
    }
    const value = {
      ...this.form.value,
      date: new Date(),
    };
    this.subscribeSubscription = this.subscribeService
      .subscribe(value)
      .subscribe(() => {
        this.form.reset();
        this.toastr.success('You subscribed', 'Subscribe', {
          positionClass: 'toast-bottom-right',
        });
      });
  }

  ngOnDestroy(): void {
    if (this.subscribeSubscription) {
      this.subscribeSubscription.unsubscribe();
    }
  }
}
