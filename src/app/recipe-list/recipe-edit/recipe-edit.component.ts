import { Component, OnInit } from '@angular/core';
import { recipeService } from '../recipe/recipe.service';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  tempImageURL: string; // temporary usage: to render image in the view
  constructor(private recipeSvcIns: recipeService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (param: Params) => {
        if ( param.UID ) {
          this.newRecipe = false;
          this.recipeOb = this.recipeSvcIns.getRecipe(+param.UID);
          this.recipeUID = this.recipeOb.UID;
          this.tempImageURL = this.recipeOb.imageURL;
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
        imageURL: new FormControl(null, Validators.required),
        ingredients: new FormArray([])
      });
      this.tempImageURL = '';
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
        imageURL: new FormControl(this.recipeOb.imageURL, Validators.required),
        ingredients: new FormArray(ingredientsFGArray)
      });
    }
  }

  onSubmit() {
    let ingList: ingredient[] = [];
    this.recipeEditForm.value.ingredients.forEach(
      (ing, index) => {
        ingList.push(new ingredient(index, ing.ingName, '', ing.ingQuantity, true));
      }
    );
    this.recipeOb = new recipe(
      this.recipeEditForm.value.name,
      this.recipeEditForm.value.description,
      this.recipeEditForm.value.imageURL,
      this.recipeUID,
      ingList
    );
    this.recipeSvcIns.updateRecipe(this.recipeOb);
    this.router.navigate(['recipes', this.recipeUID]);
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

  onImageURLChange(){
    this.tempImageURL = this.recipeEditForm.value.imageURL;
  }

  deleteIngredient(ingredientIDToDel: number){
    // deleteIngredient() - Deletes ingredient and updates all references( master recipe list data source and recipe list view & recipe edit view)
    // This approach is not required as we can do one final update once the user submits the form
    // this.recipeSvcIns.deleteIngredient(this.recipeUID, ingredientIDToDel);
    (this.recipeEditForm.get('ingredients') as FormArray).removeAt(ingredientIDToDel);
  }

  onCancel(){
    this.router.navigate(['recipes', this.recipeUID]);
  }
}
