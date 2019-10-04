import { Injectable, EventEmitter, Output } from '@angular/core';
import { recipe } from './recipe.model';
import { ingredient } from 'src/app/shared/ingredient.model';

@Injectable()
export class recipeService{
    recipeList: recipe[] = [];
    
   @Output() recipeSelectEventEmitter = new EventEmitter<{recipeID: number}>();

    constructor(){
        this.recipeList.push(new recipe("Puliogare", "Tamarind Rice", "https://eastern.in/wp-content/uploads/2017/10/Puliogare-with-Instant-Puliogare-Mix-500x500.jpg", this.recipeList, [new ingredient(101, "Rice", "KG", 1.5, true), new ingredient(102, "Peanuts", "KG", 0.5, true), new ingredient(103, "Tamarind", "KG", 0.5, true)]));
        this.recipeList.push(new recipe("Chitranna", "Lemon Rice", "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/06/lemon-rice-recipe.jpg", this.recipeList, [new ingredient(201, "Rice", "KG", 2, true), new ingredient(202, "Curry leaves", "KG", 0.5, true), new ingredient(203, "Peanuts", "KG", 0.5, true)]));
        this.recipeList.push(new recipe("Bisi Bele Bath", "Lentil Masala Rice", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Bisi_Bele_Bath_%28Bisibelebath%29.JPG/1200px-Bisi_Bele_Bath_%28Bisibelebath%29.JPG", this.recipeList, [new ingredient(301, "Rice", "KG", 3.5, true), new ingredient(302, "Potatoes", "KG", 0.5, true), new ingredient(303, "Lentil", "KG", 0.5, true)]))
    }

    getRecipes(){
      return this.recipeList.slice();
    }
}