import { Card } from 'src/app/shared/interfaces';
import { CardsService } from './../../../shared/cards.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit, OnDestroy {
  form: FormGroup;
  card: Card;
  submitted: boolean = false;
  updateSubscription: Subscription;

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      return this.cardsService.getById(params.id).subscribe((card: Card) => {
        this.card = card;
        this.form = new FormGroup({
          name: new FormControl(card.name, Validators.required),
          category: new FormControl(card.category, Validators.required),
          brand: new FormControl(card.brand, Validators.required),
          articul: new FormControl(card.articul, Validators.required),
          price: new FormControl(card.price, [
            Validators.required,
            Validators.pattern('^[0-9]*[.,]?[0-9]+$'),
          ]),
          amount: new FormControl(card.amount, [
            Validators.required,
            Validators.pattern('^[0-9]+$'),
          ]),
          images: new FormArray([]),
          dispay: new FormControl(card.dispay, [
            Validators.required,
            Validators.pattern('^[0-9]*[.,]?[0-9]+$'),
          ]),
          memory: new FormControl(card.memory, [Validators.required]),
          camera: new FormControl(card.camera, [
            Validators.required,
            Validators.pattern('^[0-9]*[.,]?[0-9]+$'),
          ]),
          description: new FormControl(card.description, [Validators.required]),
        });
        this.card.images.forEach((image) => {
          this.addSkill(image);
        });
      });
    });
  }

  addSkill(initValue: string = '') {
    const imageControl = new FormControl(initValue, Validators.required);
    (this.form.get('images') as FormArray).push(imageControl);
  }

  getControls() {
    return (this.form.get('images') as FormArray).controls;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;
    this.updateSubscription = this.cardsService
      .update({
        ...this.card,
        ...this.form.value,
      })
      .subscribe(() => {
        this.submitted = false;
        this.toastr.success('Card update successful', 'Update');
      });
  }

  ngOnDestroy(): void {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }
}
