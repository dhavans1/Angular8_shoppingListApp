import { Component } from '@angular/core';
import { ShopListService } from './shop-list/shop-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShopListService]
})
export class AppComponent {
  title = 'shoppingListApp';

  showRecipeList: boolean;

  constructor(){
    this.showRecipeList = true;
  }

  toggleView(event: {menuItemClicked: string}){
    event.menuItemClicked == 'recipeList' ? this.showRecipeList = true : this.showRecipeList = false;
  }
}
