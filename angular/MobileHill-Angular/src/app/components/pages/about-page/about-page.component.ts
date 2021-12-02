import { Component, OnInit } from '@angular/core';
import { faShippingFast,faCartArrowDown,faPercent } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  faShippingFast = faShippingFast;
  faCartArrowDown = faCartArrowDown;
  faPercent = faPercent;
  constructor() { }

  ngOnInit(): void {
  }

}
