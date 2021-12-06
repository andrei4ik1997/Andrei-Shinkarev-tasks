import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  form: FormGroup;

  @Output() sortValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      sort: new FormControl('newest'),
    });
    this.sortValue.emit(this.form.controls['sort'].value);
    this.form.controls['sort'].valueChanges.subscribe((value) => {
      this.sortValue.emit(this.form.controls['sort'].value);
    });
  }
}
