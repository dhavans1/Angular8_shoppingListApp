import { Component } from '@angular/core';
import { recipe } from './recipe/recipe.model';

@Component({
    selector: 'recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class recipeListComponent{
    recipeList: recipe[] = [];

    constructor(){
        this.recipeList.push(new recipe("Puliogare", "Tamarind Rice", "https://eastern.in/wp-content/uploads/2017/10/Puliogare-with-Instant-Puliogare-Mix-500x500.jpg", this.recipeList),
        new recipe("Chitranna", "Lemon Rice", "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/06/lemon-rice-recipe.jpg", this.recipeList),
        new recipe("Bisi Bele Bath", "Lentil Masala Rice", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Bisi_Bele_Bath_%28Bisibelebath%29.JPG/1200px-Bisi_Bele_Bath_%28Bisibelebath%29.JPG", this.recipeList))
    }
}