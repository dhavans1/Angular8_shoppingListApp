import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { recipe } from './recipe.model';
import { recipeService } from './recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class recipeComponent implements OnInit {

  @Input() recipe: recipe;

  constructor( private recipeServiceInstance: recipeService, private router: Router ) { }

  ngOnInit() {
  }

}
