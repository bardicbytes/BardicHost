import { IComponent } from "../IComponent";

import gameConfig from  '../serverConfig.json';
import { Entity } from "../Entity";
import stringHash from "string-hash";

export class pocket 
{
    size : number;

    contents : number[];//array of entity ids

    constructor(size : number, count : number)
    {
        this.contents = new Array<number>(count);
        this.size = size;
    }
}

export class InventoryComp implements IComponent
{
    static compName = "Inventory";
    static nameHash : number = stringHash(InventoryComp.compName);

    pockets : pocket[];

    constructor(){
        this.pockets = [new pocket(2,2)];
    }

    init(pockets : pocket[]){
        this.pockets = pockets;
    }

    getCompName() : string {return InventoryComp.compName};
    getCompHash() : number {return InventoryComp.nameHash};

    toString() : string
    {
        return "InventoryComp";
    }


}