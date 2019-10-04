import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { ingredient } from '../shared/ingredient.model'

@Injectable()
export class ShopListService implements OnInit{
    ingredientList: ingredient[] = [];
    @Output() addEvent = new EventEmitter<ingredient[]>();

    constructor(){        
        this.ingredientList.push(new ingredient(this.ingredientList.length, "Rice", "KG", 0.5, true));
        this.ingredientList.push(new ingredient(this.ingredientList.length, "Peanuts", "KG", 0.1, true));
        this.ingredientList.push(new ingredient(this.ingredientList.length, "Onions", "", 2, true));
    }

    ngOnInit(){

    }

    getIngredients(){
        return this.ingredientList.slice();
    }

    addIngredient(item: {itemName: string, itemQuantity: number}){
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
        this.addEvent.emit(this.ingredientList);
    }
}