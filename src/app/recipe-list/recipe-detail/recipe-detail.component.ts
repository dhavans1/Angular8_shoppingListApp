import { Component, OnInit, Input } from '@angular/core';
import {recipe} from '../recipe/recipe.model';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShopListService } from 'src/app/shop-list/shop-list.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class recipeDetailComponent implements OnInit {

  @Input() recipeDetail: recipe;

  constructor( private shoplistServiceInstance: ShopListService ) { }

  ngOnInit() {
  }

  addToShop( ingredients: ingredient[] ){
    ingredients.forEach(
      (ingredient) => {
        let name = ingredient.name;
        let quantity = ingredient.quantity;
        if (name !== '' && !isNaN(quantity))
            this.shoplistServiceInstance.addIngredient({itemName: name, itemQuantity: quantity});
      }
    );
  }
}
