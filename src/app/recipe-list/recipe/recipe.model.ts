import { ingredient } from 'src/app/shared/ingredient.model';

export class recipe{
    public UID: number;
    public name: string;
    public description: string;
    public imageURL: string;
    public ingredients: ingredient[];

    constructor(name: string, desc: string, imgURL: string, UID, ingList: ingredient[]){
        this.name = name;
        this.description = desc;
        this.imageURL = imgURL;
        this.UID = UID;
        this.ingredients = ingList;
    }
}