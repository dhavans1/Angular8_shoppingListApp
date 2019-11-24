import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShopListService } from './shop-list.service';
import { CanDeactivateGaurd } from '../app-header/can-deactivate-gaurd.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'shop-list',
    templateUrl: './shop-list.component.html',
    styleUrls: ['./shop-list.component.css'],
    providers: []
})

export class shopListComponent implements OnInit, CanDeactivateGaurd{
    ingredientList: ingredient[];
    
    constructor( private shoplistServiceInstance: ShopListService ){}

    ngOnInit(){
        this.ingredientList = this.shoplistServiceInstance.getIngredients();

        //Observe/Subscribe/Listen to add event 
        this.shoplistServiceInstance.ingListUpdated.subscribe(
            (ingredientList) => {
                this.ingredientList = ingredientList;
                console.log(this.ingredientList);
            }
        );
    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        //logic to check if shop-edit form is changed and not saved - TO BE MOVED TO SHOP-LIST-EDIT COMPONENT
        if ( window.confirm('Do you want to exit?') ) {
            return true;
        } else {
            return false;
        }
    }

    editItem(index: number){
        this.shoplistServiceInstance.editItemSubject.next(index);
    }
}

