import { Component } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'shop-list',
    templateUrl: './shop-list.component.html',
    styleUrls: ['./shop-list.component.css']
})

export class shopListComponent{
    ingredientList: ingredient[] = [];

    constructor(){
        this.ingredientList.push(new ingredient(this.ingredientList.length, "Rice", "KG", 0.5, true));
        this.ingredientList.push(new ingredient(this.ingredientList.length, "Peanuts", "KG", 0.1, true));
        this.ingredientList.push(new ingredient(this.ingredientList.length, "Onions", "", 2, true));
    }

    addShoppingItem(item: {itemName: string, itemQuantity: number}){
        //check if item exists
        let existingItem = this.ingredientList.find(
            (ingredient) => {
                return ingredient.name.toLowerCase() === item.itemName.toLowerCase();
            }
        );

        if(existingItem){
            //get index
            let i = this.ingredientList.indexOf(existingItem);
            this.ingredientList[i].quantity += +item.itemQuantity;
        }
        else{
            //add new item
            this.ingredientList.push(new ingredient(this.ingredientList.length, item.itemName, "", item.itemQuantity, true));
        }
    }
}

