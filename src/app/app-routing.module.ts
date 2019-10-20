import { RouterModule, Router, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { recipeListComponent } from './recipe-list/recipe-list.component';
import { recipeDetailComponent } from './recipe-list/recipe-detail/recipe-detail.component';
import { shopListComponent } from './shop-list/shop-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGaurdService } from './auth/auth-gaurd.service';
import { CanDeactivateGaurd } from './app-header/can-deactivate-gaurd.service';
import { RecipeEditComponent } from './recipe-list/recipe-edit/recipe-edit.component';
import { RecipeEmptyComponent } from './recipe-list/recipe-empty/recipe-empty.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'recipes', component: recipeListComponent,
        canActivate: [AuthGaurdService],
        children: [
            { path: '', component: RecipeEmptyComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':UID', component: recipeDetailComponent },
            { path: ':UID/edit', component: RecipeEditComponent }
    ]},
    { path: 'shopping-list', component: shopListComponent, canActivate: [AuthGaurdService], canDeactivate: [CanDeactivateGaurd] },
    { path: '**', component: ErrorPageComponent, data: { message: 'Page Not Found!' } }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
     ],
     providers: []
})
export class AppRouter {
    constructor(private router: Router) {}
}
