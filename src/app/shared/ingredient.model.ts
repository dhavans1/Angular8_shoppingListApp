export class ingredient{
    public ID: number;
    public name: string;
    public metric: string;
    public quantity: number;
    public toBuy: boolean;

    public constructor(ID: number, name: string, metric: string, quantity: number, toBuy: boolean){
        this.ID = ID;
        this.name = name;
        this.metric = metric;
        this.quantity = quantity;
        this.toBuy = toBuy == null ? true : toBuy;
    }
}
