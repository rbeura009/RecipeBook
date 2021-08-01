import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/Models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor() {}
  ingredients: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('Tomatoes', 15),
  ];

  onAddNewIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }

  ngOnInit(): void {}
}
