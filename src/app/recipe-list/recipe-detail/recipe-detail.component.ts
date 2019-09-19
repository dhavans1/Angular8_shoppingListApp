import { Component, OnInit, Input } from '@angular/core';
import {recipe} from '../recipe/recipe.model'
@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class recipeDetailComponent implements OnInit {

  @Input() recipeDetail: recipe;

  constructor() { }

  ngOnInit() {
  }

}
