import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs';

@Injectable()
export class ShopListService {
    ingredientList: ingredient[] = [];
    @Output() ingListUpdated = new EventEmitter<ingredient[]>();
    editItemSubject = new Subject<number>();

    constructor(){
        this.ingredientList.push(new ingredient(this.ingredientList.length, "Rice", "KG", 0.5, true));
        this.ingredientList.push(new ingredient(this.ingredientList.length, "Peanuts", "KG", 0.1, true));
        this.ingredientList.push(new ingredient(this.ingredientList.length, "Onions", "", 2, true));
    }

    getIngredients(){
        return this.ingredientList.slice();
    }

    getIngredient(index){
        if ( index >= 0 && index < this.ingredientList.length ){
            return this.ingredientList[index];
        }
        alert('error obtaining the ingredient');
    }

    addIngredient(item: {itemName: string, itemQuantity: number}){
        let existingItem = this.ingredientList.find(
        (ingredient) => {
            return ingredient.name.toLowerCase() === item.itemName.toLowerCase();
        }
        );

        if(existingItem){
            // get index
            let i = this.ingredientList.indexOf(existingItem);
            this.ingredientList[i].quantity += +item.itemQuantity;
        }
        else{
            // add new item
            this.ingredientList.push(new ingredient(this.ingredientList.length, item.itemName, '', item.itemQuantity, true));
        }
        this.ingListUpdated.emit(this.ingredientList);
    }

    editIngredient(itemIndex, editedIngredient: { itemName: string, itemQuantity: number } ){
        // tslint:disable-next-line: max-line-length
        this.ingredientList.splice(itemIndex, 1, new ingredient( itemIndex, editedIngredient.itemName, '', editedIngredient.itemQuantity, true));
        this.ingListUpdated.emit(this.ingredientList);
    }

    deleteItemWithIndex(delIndex: number){
        this.ingredientList.splice(delIndex, 1);
        this.ingListUpdated.emit(this.ingredientList);
    }
}