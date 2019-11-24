import { Component, OnInit, OnDestroy } from '@angular/core';
import { recipe } from './recipe/recipe.model';
import { recipeService } from './recipe/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css'],
    providers: [recipeService]
})

export class recipeListComponent implements OnInit, OnDestroy{
    recipeList: recipe[];
    recipeListUpdateSubscription: Subscription;

    constructor( private recipeServiceInstance: recipeService, private router: Router, private activeRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.recipeListUpdateSubscription = this.recipeServiceInstance.recipeListUpdatedSubject.subscribe(
            (newRecipeList: recipe[]) => {
                console.log('received new recipe list: ');
                this.recipeList = newRecipeList;
            }
        );
        this.recipeList = this.recipeServiceInstance.getRecipes();
    }

    openRecipeEditor(){
        this.router.navigate(['new'], { relativeTo: this.activeRoute });
    }

    ngOnDestroy(){
        this.recipeListUpdateSubscription.unsubscribe();
    }
}
