import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { shopListComponent } from './shop-list/shop-list.component';
import { shopListItemComponent } from './shop-list/shop-list-item/shop-list-item.component';
import { shopListEditComponent } from './shop-list/shop-list-edit/shop-list-edit.component';
import { recipeListComponent } from './recipe-list/recipe-list.component';
import { recipeComponent } from './recipe-list/recipe/recipe.component';
import { recipeDetailComponent } from './recipe-list/recipe-detail/recipe-detail.component';
import { dropdownDirective } from './shared/dropdown.directive';
import { AppRouter } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthService } from './auth/auth.service';
import { AuthGaurdService } from './auth/auth-gaurd.service';
import { CanDeactivateGaurd } from './app-header/can-deactivate-gaurd.service';
import { RecipeEditComponent } from './recipe-list/recipe-edit/recipe-edit.component';
import { RecipeEmptyComponent } from './recipe-list/recipe-empty/recipe-empty.component';
// import { shopListReducer } from './shop-list/store/shop-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    shopListComponent,
    shopListItemComponent,
    shopListEditComponent,
    recipeListComponent,
    recipeComponent,
    recipeDetailComponent,
    dropdownDirective,
    ErrorPageComponent,
    LoginComponent,
    LogoutComponent,
    RecipeEditComponent,
    RecipeEmptyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouter,
    // StoreModule.forRoot({ shopList: shopListReducer })
  ],
  providers: [AuthService, AuthGaurdService, CanDeactivateGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
