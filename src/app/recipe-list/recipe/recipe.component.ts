import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { recipe } from './recipe.model';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class recipeComponent implements OnInit {

  @Input() recipe: recipe;

  @Output() recipeSelectEvent = new EventEmitter<{recipeID: number}>();

  onrecipeSelect(recipeID: number){
    console.log(recipeID);
    this.recipeSelectEvent.emit({recipeID: recipeID});
  }

  constructor() { }

  ngOnInit() {
  }

}
