import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  constructor() {}
  @Input() selectedRecipe: Recipe;
  ngOnInit(): void {
    console.log(this.selectedRecipe);
  }
}
