import { Directive, HostListener, HostBinding } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Directive({
    selector: '[dropdownToggler]'
})

export class dropdownDirective{

    @HostBinding('class.open') isOpen : boolean = false;

    @HostListener('click') expandCollapse(){
        this.isOpen = !this.isOpen;
    }
}