import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'shop-list-edit',
    templateUrl: './shop-list-edit.component.html',
    styleUrls: ['./shop-list-edit.component.css']
})

export class shopListEditComponent{

    @ViewChild('itemNameInput', {static: false}) itemName: ElementRef;
    @ViewChild('itemQuantityInput', {static: false}) itemQuantity: ElementRef;

    @Output() addEvent = new EventEmitter<{itemName: string, itemQuantity: number}>();

    addItem(){
        let name = this.itemName.nativeElement.value;
        let quantity = this.itemQuantity.nativeElement.value;
        console.log(this.itemName.nativeElement.value, this.itemQuantity.nativeElement.value, " : ", this.itemName.nativeElement.value !== '' && this.itemQuantity.nativeElement.value !== '')

        if (this.itemName.nativeElement.value !== '' && !isNaN(this.itemQuantity.nativeElement.value))
            this.addEvent.emit({itemName: name, itemQuantity: quantity});
    }
}