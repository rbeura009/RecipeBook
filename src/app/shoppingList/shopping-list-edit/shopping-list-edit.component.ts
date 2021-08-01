import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredients } from 'src/app/Models/ingredients.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  constructor() {}

  @ViewChild('nameInput') nameInputField: ElementRef;
  @ViewChild('amountInput') amountInputField: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredients>();
  ngOnInit(): void {}

  onAdd(event) {
    event.preventDefault();
    this.ingredientAdded.emit({
      name: this.nameInputField.nativeElement.value,
      amount: this.amountInputField.nativeElement.value,
    });
  }
}
