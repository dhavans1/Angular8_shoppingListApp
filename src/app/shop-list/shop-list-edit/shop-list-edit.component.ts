import { Component, ViewChild, ElementRef, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ShopListService } from '../shop-list.service';
import { NgForm } from '@angular/forms';
import { ingredient } from 'src/app/shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'shop-list-edit',
    templateUrl: './shop-list-edit.component.html',
    styleUrls: ['./shop-list-edit.component.css']
})

export class shopListEditComponent implements OnInit, OnDestroy, AfterViewInit{
    isChanged: boolean = false;
    // @ViewChild('itemNameInput', {static: false}) itemName: ElementRef;
    // @ViewChild('itemQuantityInput', {static: false}) itemQuantity: ElementRef;
    subscription: Subscription;
    editMode = false;
    editItemIndex: number;
    editItem: ingredient;
    @ViewChild('f', {static: false}) formRef: NgForm;
    constructor( private shoplistServiceInstance: ShopListService ) {}

    ngOnInit(){
        //
    }

    ngAfterViewInit(){
        this.subscription = this.shoplistServiceInstance.editItemSubject.subscribe(
            (index) => {
                this.editMode = true;
                this.editItemIndex = index;
                this.editItem = this.shoplistServiceInstance.getIngredient(index);
                console.log(this.formRef);
                this.formRef.setValue({
                    ingredientInp: this.editItem.name,
                    quantityInp: this.editItem.quantity
                });
            }
        );
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    onSubmit(form: NgForm){
        const name = form.value.ingredientInp;
        const quantity = form.value.quantityInp;
        // check if in edit mode or add new item mode
        if ( this.editMode ) {
            this.shoplistServiceInstance.editIngredient(this.editItemIndex, { itemName: name, itemQuantity: quantity});
            this.editMode = false;
            this.editItem = null;
            this.editItemIndex = -1;
        } else {
            if (name !== '' && !isNaN(quantity)){
                this.shoplistServiceInstance.addIngredient({itemName: name, itemQuantity: quantity});
            }
        }
        this.formRef.reset();
    }

    onClear(){
        this.formRef.reset();
        this.editMode = false;
    }

    onDelete(){
        if( this.editMode ){
            this.shoplistServiceInstance.deleteItemWithIndex(this.editItemIndex);
            this.formRef.reset();
            this.editMode = false;
        }
    }
}