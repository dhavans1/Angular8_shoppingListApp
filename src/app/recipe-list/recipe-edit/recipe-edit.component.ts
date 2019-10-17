import { Component, OnInit } from '@angular/core';
import { recipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private recipeSvcIns: recipeService) { }

  ngOnInit() {
  }

  onSubmit() {
  }
}
