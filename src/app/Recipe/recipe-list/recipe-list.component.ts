import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';
import { RecipeService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) {}
  @Output() currentlyActiveRecipe = new EventEmitter<Recipe>();

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onCurrentlyActiveRecipe(recipe: Recipe) {
    this.currentlyActiveRecipe.emit(recipe);
  }
}
