import { IComponent } from "../IComponent";

import gameConfig from  '../../config.json';
import { Entity } from "../Entity";
import stringHash from "string-hash";


export class InventoryComp implements IComponent
{
    static compName = "Inventory";
    static nameHash : number = stringHash(InventoryComp.compName);


    slotSize : number;
    slotCount : number;

    constructor(){
        this.slotSize = 1;
        this.slotCount = 1;
    }

    init(size : number, count : number){
        this.slotSize = size;
        this.slotCount = count;
    }

    getCompName() : string {return InventoryComp.compName};
    getCompHash() : number {return InventoryComp.nameHash};


    toString() : string
    {
        return "InventoryComp";
    }

}