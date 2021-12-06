import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CallBackService } from 'src/app/shared/services/callBack.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnDestroy {
  @Output() close = new EventEmitter<void>();
  form: FormGroup;
  callBackSubscription: Subscription;

  constructor(
    private toastr: ToastrService,
    private callBackService: CallBackService
  ) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.pattern('^[a-zA-Z]+$')),
      telephone: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const value = {
      ...this.form.value,
      date: new Date(),
    };
    this.callBackSubscription = this.callBackService
      .callBack(value)
      .subscribe(() => {
        this.form.reset();
        this.toastr.success('The manager will call you back', 'Сall', {
          positionClass: 'toast-bottom-right',
        });
        this.close.emit();
      });
  }
  ngOnDestroy(): void {
    if (this.callBackSubscription) {
      this.callBackSubscription.unsubscribe();
    }
  }
}
