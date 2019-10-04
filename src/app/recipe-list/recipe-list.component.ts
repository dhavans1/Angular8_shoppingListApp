import { Component, OnInit } from '@angular/core';
import { recipe } from './recipe/recipe.model';
import { recipeService } from './recipe/recipe.service';

@Component({
    selector: 'recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css'],
    providers: [recipeService]
})

export class recipeListComponent implements OnInit{
    recipeList: recipe[];
    
    selectedRecipe: recipe;

    constructor( private recipeServiceInstance: recipeService ){

    }

    ngOnInit(){
        this.recipeList = this.recipeServiceInstance.getRecipes();
        
        //Observe/Listen to recipe selected event emitter 
        this.recipeServiceInstance.recipeSelectEventEmitter.subscribe(
            (recipeInfo) =>{
                this.selectedRecipe = this.recipeList.find(
                    (recipe) => {
                        return recipe.UID == recipeInfo.recipeID
                    });
            }
        );
    }

 
}