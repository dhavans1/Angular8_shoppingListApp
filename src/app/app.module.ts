import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { shopListComponent } from './shop-list/shop-list.component';
import { shopListItemComponent } from './shop-list/shop-list-item/shop-list-item.component';
import { shopListEditComponent } from './shop-list/shop-list-edit/shop-list-edit.component';
import { recipeListComponent } from './recipe-list/recipe-list.component';
import { recipeComponent } from './recipe-list/recipe/recipe.component';
import { recipeDetailComponent } from './recipe-list/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    shopListComponent,
    shopListItemComponent,
    shopListEditComponent,
    recipeListComponent,
    recipeComponent,
    recipeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
