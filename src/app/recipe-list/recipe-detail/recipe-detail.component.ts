import { Component, OnInit, Input } from '@angular/core';
import {recipe} from '../recipe/recipe.model';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShopListService } from 'src/app/shop-list/shop-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { recipeService } from '../recipe/recipe.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
// tslint:disable-next-line: class-name
export class recipeDetailComponent implements OnInit {

  @Input() recipeDetail: recipe;

  constructor(
    private recipeServiceInstance: recipeService,
    private shoplistServiceInstance: ShopListService,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
          this.recipeDetail = this.recipeServiceInstance.getRecipe(+params.UID);
      }
  );
  }

  addToShop( ingredients: ingredient[] ) {
    ingredients.forEach(
      // tslint:disable-next-line: no-shadowed-variable
      (ingredient) => {
        const name = ingredient.name;
        const quantity = ingredient.quantity;
        if (name !== '' && !isNaN(quantity)) {
            this.shoplistServiceInstance.addIngredient({itemName: name, itemQuantity: quantity});
        }
      }
    );
  }

  editRecipe(recipeToEdit: recipe) {

  }

  deleteRecipe(recipeToDelete: recipe) {
    if ( window.confirm('Delete this recipe?') ) {
      this.recipeServiceInstance.deleteRecipe(recipeToDelete.UID);
    }
  }
}
