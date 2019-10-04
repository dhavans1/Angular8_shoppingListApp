import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ShopListService } from '../shop-list.service';

@Component({
    selector: 'shop-list-edit',
    templateUrl: './shop-list-edit.component.html',
    styleUrls: ['./shop-list-edit.component.css']
})

export class shopListEditComponent{
    @ViewChild('itemNameInput', {static: false}) itemName: ElementRef;
    @ViewChild('itemQuantityInput', {static: false}) itemQuantity: ElementRef;

    constructor( private shoplistServiceInstance: ShopListService ){}

    addItem(){
        let name = this.itemName.nativeElement.value;
        let quantity = this.itemQuantity.nativeElement.value;
        if (this.itemName.nativeElement.value !== '' && !isNaN(this.itemQuantity.nativeElement.value))
            this.shoplistServiceInstance.addIngredient({itemName: name, itemQuantity: quantity});
    }
}