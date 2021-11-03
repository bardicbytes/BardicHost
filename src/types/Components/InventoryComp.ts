import { IComponent } from "../IComponent";

import gameConfig from  '../../GameConfig.json';
import { Entity } from "../Entity";


export class InventoryComp implements IComponent
{
    static compName = "Inventory";
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

    toString() : string
    {
        return "InventoryComp";
    }

}