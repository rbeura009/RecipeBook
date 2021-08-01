import { Injectable } from '@angular/core';
import { Recipe } from '../Models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test Recipe Description',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'
    ),
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
