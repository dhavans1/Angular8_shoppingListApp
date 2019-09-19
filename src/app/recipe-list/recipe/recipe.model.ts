export class recipe{
    public UID: number;
    public name: string;
    public description: string;
    public imageURL: string;

    constructor(name: string, desc: string, imgURL: string, recipeList: recipe[]){
        this.name = name;
        this.description = desc;
        this.imageURL = imgURL;
        this.UID = recipeList.length+1;
        console.log(recipeList, recipeList.length);
    }
}