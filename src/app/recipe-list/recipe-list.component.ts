import { Component, OnInit, Input } from '@angular/core';
import { recipe } from './recipe/recipe.model';
import { recipeService } from './recipe/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css'],
    providers: [recipeService]
})

export class recipeListComponent implements OnInit{
    recipeList: recipe[];

    constructor( private recipeServiceInstance: recipeService, private router: Router, private activeRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.recipeList = this.recipeServiceInstance.getRecipes();
    }

    openRecipeEditor(){
        this.router.navigate(['new'], { relativeTo: this.activeRoute });
    }
}
