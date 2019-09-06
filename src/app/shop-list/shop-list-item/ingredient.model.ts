export class ingredient{
    public name: string;
    public metric: string;
    public quantity: number;
    public toBuy: boolean;

    public constructor(name: string, metric: string, quantity: number, toBuy: boolean){
        this.name = name;
        this.metric = metric;
        this.quantity = quantity;
        this.toBuy = toBuy == null ? true : toBuy;
    }
}
