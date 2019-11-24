import { Injectable, EventEmitter, Output, OnInit } from '@angular/core';
import { recipe } from './recipe.model';
import { ingredient } from 'src/app/shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class recipeService {
    recipeList: recipe[] = [];
    @Output() recipeSelectEventEmitter = new EventEmitter<{val: boolean}>();
    @Output() recipeListUpdatedSubject = new Subject<recipe[]>();
  //  @Output() recipeSelectEventEmitter = new EventEmitter<{recipeID: number}>();

    constructor(){
        this.recipeList.push(new recipe('Puliogare', 'Tamarind Rice', 'https://eastern.in/wp-content/uploads/2017/10/Puliogare-with-Instant-Puliogare-Mix-500x500.jpg', 0, [new ingredient(101, 'Rice', 'KG', 1.5, true), new ingredient(102, 'Peanuts', 'KG', 0.5, true), new ingredient(103, 'Tamarind', 'KG', 0.5, true)]));
        this.recipeList.push(new recipe('Chitranna', 'Lemon Rice', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/06/lemon-rice-recipe.jpg', 1, [new ingredient(201, 'Rice', 'KG', 2, true), new ingredient(202, 'Curry leaves', 'KG', 0.5, true), new ingredient(203, 'Peanuts', 'KG', 0.5, true)]));
        this.recipeList.push(new recipe('Bisi Bele Bath', 'Lentil Masala Rice', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Bisi_Bele_Bath_%28Bisibelebath%29.JPG/1200px-Bisi_Bele_Bath_%28Bisibelebath%29.JPG', 2, [new ingredient(301, 'Rice', 'KG', 3.5, true), new ingredient(302, 'Potatoes', 'KG', 0.5, true), new ingredient(303, 'Lentil', 'KG', 0.5, true)]))
    }


    getRecipes() {
      return this.recipeList.slice();
    }

    getRecipe( UID: number ): recipe {
      return this.recipeList.find(
                    // tslint:disable-next-line: no-shadowed-variable
                    (recipe) => {
                        return recipe.UID === UID;
                    });
    }

    deleteRecipe( UID: number ) {
      console.log("deleteRecipe");
      this.recipeList = this.recipeList.filter(
        (item: recipe) => {
          return item.UID !== UID;
        }
      );
      // notify of the changes to the recipe list
      this.recipeListUpdatedSubject.next(this.recipeList);
    }

    updateRecipe(recipeOb: recipe) {
      console.log("updateRecipe");
      let isNewRecipe = true;
      let recipeIndex = -1;
      this.recipeList.forEach(
        (r, index) => {
          if ( r.UID === recipeOb.UID ) {
            isNewRecipe = false;
            recipeIndex = index;
          }
        });
      if ( isNewRecipe ) {
        this.recipeList.push(recipeOb);
      } else {
        this.recipeList[recipeIndex] = recipeOb;
      }
      // notify of the changes to the recipe list
      this.recipeListUpdatedSubject.next(this.recipeList);
    }


    // deleteIngredient() - Deletes ingredient and updates all references( master recipe list data source
    // and recipe list view & recipe edit view)
    // This approach is not required as we can do one final update once the user submits the form
    // this.recipeSvcIns.deleteIngredient(this.recipeUID, ingredientIDToDel);
    // FUNCTION DEFINITION:
    // deleteIngredient(recipeUID: number, ingredientIDToDel: number) {
    //   console.log("deleteIngredient");
    //   this.recipeList[recipeUID].ingredients.splice(ingredientIDToDel, 1);
    //   this.recipeListUpdatedSubject.next(this.recipeList);
    // }
}
