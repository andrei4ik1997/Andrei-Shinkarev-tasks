import { Component, OnInit } from '@angular/core';
import {
  faQuestionCircle,
  faMobileAlt,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
  faQuestionCircle = faQuestionCircle;
  faMobileAlt = faMobileAlt;
  faAddressBook = faAddressBook;
  constructor() {}

  ngOnInit(): void {}
}
