import { Component, OnInit } from '@angular/core';
import { recipeService } from '../recipe/recipe.service';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { recipe } from '../recipe/recipe.model'
import { ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  newRecipe = true;
  recipeEditForm: FormGroup;
  ingredientForm: FormGroup;
  ingredientsFormArray: FormArray;
  recipeOb: recipe;
  recipeUID: number;
  constructor(private recipeSvcIns: recipeService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (param: Params) => {
        if ( param.UID ) {
          this.newRecipe = false;
          this.recipeOb = this.recipeSvcIns.getRecipe(+param.UID);
          this.recipeUID = this.recipeOb.UID;
        }
      }
    );

    this.ingredientForm = new FormGroup({
      ingName: new FormControl(null, Validators.required),
      ingQuantity: new FormControl(0, [Validators.required, Validators.min(0)])
    });
    // this.ingredientsFormArray = new FormArray([]);
    if (this.newRecipe) {
      this.recipeUID = this.recipeSvcIns.getRecipes().length;
      this.recipeEditForm = new FormGroup({
        name : new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
        image: new FormControl(null, Validators.required),
        ingredients: new FormArray([])
      });
    } else {
      let ingredientsFGArray: FormGroup[] = [];
      this.recipeOb.ingredients.forEach(
        (ingredient) => {
          ingredientsFGArray.push(new FormGroup({
            ingName: new FormControl(ingredient.name, Validators.required),
            ingQuantity: new FormControl(ingredient.quantity, [Validators.required, Validators.min(0)])
          }));
        }
      );
      this.recipeEditForm = new FormGroup({
        name : new FormControl(this.recipeOb.name, Validators.required),
        description: new FormControl(this.recipeOb.description, Validators.required),
        image: new FormControl(this.recipeOb.imageURL, Validators.required),
        ingredients: new FormArray(ingredientsFGArray)
      });
    }
  }

  onSubmit() {
    
    let ingList: ingredient[] = [];
    this.recipeEditForm.value.ingredients.forEach(
      (ing, index) => {
        ingList.push(new ingredient(index, ing.ingName, '', ing.ingQuantity, true))
      }
    );
    
    this.recipeOb = new recipe(
      this.recipeEditForm.value.name,
      this.recipeEditForm.value.description,
      '',
      this.recipeUID,
      ingList
    );
    console.log(this.recipeOb);
    this.recipeSvcIns.updateRecipe(this.recipeOb);
  }

  addIngredient() {
    (this.recipeEditForm.get('ingredients') as FormArray).push(
      new FormGroup({
        ingName: new FormControl(null, Validators.required),
        ingQuantity: new FormControl(0, [Validators.required, Validators.min(0)])
      })
    );
    console.log(this.recipeEditForm);
  }

  getIngredientsControls() {
    return (this.recipeEditForm.get('ingredients') as FormArray).controls;
  }

}
