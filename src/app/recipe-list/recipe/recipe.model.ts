import { ingredient } from 'src/app/shared/ingredient.model';

export class recipe{
    public UID: number;
    public name: string;
    public description: string;
    public imageURL: string;
    public ingredients: ingredient[];

    constructor(name: string, desc: string, imgURL: string, recipeList: recipe[], ingList: ingredient[]){
        this.name = name;
        this.description = desc;
        this.imageURL = imgURL;
        this.UID = recipeList.length+1;
        this.ingredients = ingList;
    }
}