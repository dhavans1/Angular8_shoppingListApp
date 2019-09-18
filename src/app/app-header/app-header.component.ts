import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  collapsed: boolean;

  @Output() menuClickEvent = new EventEmitter<{menuItemClicked: string}>();
  
  constructor() {
    this.collapsed = true;
   }

  ngOnInit() {
  }

  onMenuItemClick(menuItem: string){
    this.menuClickEvent.emit({menuItemClicked: menuItem});
  }
}
