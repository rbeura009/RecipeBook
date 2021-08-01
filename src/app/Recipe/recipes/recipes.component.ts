import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor() {}
  @Input() selectedRecipe: Recipe = null;
  @Output() currentlyActiveRecipe = new EventEmitter<Recipe>();
  ngOnInit(): void {}

  onCurrentlyActiveRecipe(recipe: Recipe) {
    this.currentlyActiveRecipe.emit(recipe);
  }
}
