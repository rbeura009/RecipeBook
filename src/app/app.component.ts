import { Component } from '@angular/core';
import { Recipe } from './Models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  route = '';
  selectedRecipe: Recipe = null;
  onNav(component) {
    this.route = component;
  }

  onRecipeSelect(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
