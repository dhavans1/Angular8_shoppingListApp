// import { Action } from '@ngrx/store';
// import { ingredient } from '../../shared/ingredient.model';
// import * as shopListActions from './shop-list.actions';

// const initialState = {
//     ingredientList: [
//         this.ingredientList.push(new ingredient(this.ingredientList.length, "Rice", "KG", 0.5, true)),
//         this.ingredientList.push(new ingredient(this.ingredientList.length, "Peanuts", "KG", 0.1, true)),
//         this.ingredientList.push(new ingredient(this.ingredientList.length, "Onions", "", 2, true))
//     ]
// };

// export function shopListReducer( state = initialState, action: shopListActions.AddIngredient ) {
//     switch ( action.type ){
//         case shopListActions.ADD_INGREDIENT:
//             return {
//                 ...state,
//                 ingredientList: [...state.ingredientList, action.payload]
//             }
//     }
// }