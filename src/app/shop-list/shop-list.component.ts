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
        this.ingredientList.push(
            new ingredient("Rice", "KG", 0.5, true),
            new ingredient("Peanuts", "KG", 0.1, true),
            new ingredient("Onions", "", 2, true),
        )
    }
}

