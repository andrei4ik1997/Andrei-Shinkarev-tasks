import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss','../../../../adaptiv.scss'],
})
export class FooterComponent   {
  @Output() modal = new EventEmitter<void>();
  constructor() {}

}
