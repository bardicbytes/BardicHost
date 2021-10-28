import { Type } from "typescript";
import { IComponent } from "../IComponent";

export class ResourceComp implements IComponent
{
    type : string;
    amount : number;
    regen : number;
    

    constructor(type : string, regen : number){
        this.type = type;
        this.regen = regen;
        this.amount = 1;
    }

    toString() : string
    {
        return "";
    }
}