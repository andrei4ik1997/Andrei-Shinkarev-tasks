import { Component } from '@angular/core';
import {
  faQuestionCircle,
  faMobileAlt,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss', '../../../../adaptiv.scss'],
})
export class ContactsPageComponent {
  faQuestionCircle = faQuestionCircle;
  faMobileAlt = faMobileAlt;
  faAddressBook = faAddressBook;
  constructor() {}

}
