import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor() {}

  @Input('rcp') recipe: Recipe;
  @Output() currentlyActiveRecipe = new EventEmitter<Recipe>();
  ngOnInit(): void {}

  onRecipeSelect(recipe) {
    this.currentlyActiveRecipe.emit(recipe);
  }
}
