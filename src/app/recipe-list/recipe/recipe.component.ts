import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { recipe } from './recipe.model';
import { recipeService } from './recipe.service';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class recipeComponent implements OnInit {

  @Input() recipe: recipe;

  constructor( private recipeServiceInstance: recipeService ) { }

  onrecipeSelect(recipeID: number){
    this.recipeServiceInstance.recipeSelectEventEmitter.emit({recipeID: recipeID});; 
  }

  ngOnInit() {
  }

}
