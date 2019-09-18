import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
