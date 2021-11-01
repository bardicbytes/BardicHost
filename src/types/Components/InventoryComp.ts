import { IComponent } from "../IComponent";

import gameConfig from  '../../GameConfig.json';
import { Entity } from "../Entity";


export class InventoryComp implements IComponent
{
    slotSize : number;
    slotCount : number;

    constructor(size : number, count : number){
        this.slotSize = size;
        this.slotCount = count;
    }

    toString() : string
    {
        return "InventoryComp";
    }

}