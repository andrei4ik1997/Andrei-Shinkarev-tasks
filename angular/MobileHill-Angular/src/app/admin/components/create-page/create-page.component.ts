import { CardsService } from './../../../shared/cards.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Card } from 'src/app/shared/interfaces';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;

  constructor(
    private cardsServise: CardsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      category: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      articul: new FormControl(null, Validators.required),
      price: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*[.,]?[0-9]+$'),
      ]),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
      ]),
      images: new FormGroup({
        image: new FormControl(null, Validators.required),
        imageArray: new FormArray([]),
      }),
      dispay: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*[.,]?[0-9]+$'),
      ]),
      memory: new FormControl('', Validators.required),
      camera: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*[.,]?[0-9]+$'),
      ]),
      description: new FormControl(null),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const card: Card = {
      ...this.form.value,
      images: Object.values(this.form.value.images).flat(),
      date: new Date(),
    };

    this.cardsServise.create(card).subscribe(() => {
      this.form.reset();
      this.toastr.success('Card add', 'Add');
    });

    (this.form.get('images').get('imageArray') as FormArray).clear();
  }

  addSkill() {
    const imageControl = new FormControl('', Validators.required);
    (this.form.get('images').get('imageArray') as FormArray).push(imageControl);
  }
  getControls() {
    return (this.form.get('images').get('imageArray') as FormArray).controls;
  }
}
