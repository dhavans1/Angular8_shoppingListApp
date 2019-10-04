import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShopListService } from './shop-list.service';

@Component({
    selector: 'shop-list',
    templateUrl: './shop-list.component.html',
    styleUrls: ['./shop-list.component.css'],
    providers: []
})

export class shopListComponent implements OnInit{
    ingredientList: ingredient[];
    
    constructor( private shoplistServiceInstance: ShopListService ){}

    ngOnInit(){
        this.ingredientList = this.shoplistServiceInstance.getIngredients();

        //Observe/Subscribe/Listen to add event 
        this.shoplistServiceInstance.addEvent.subscribe(
            (ingredientList) => {
                this.ingredientList = ingredientList;
            }
        );
    }
}

