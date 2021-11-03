import { Type } from "typescript";
import { IComponent } from "../IComponent";

export class ResourceComp implements IComponent
{
    static compName = "Resource";

    type : string;
    amount : number;
    regen : number;

    constructor()
    {
        this.type = "Default Resource";
        this.regen = .1;
        this.amount = 1;
    }

    init(type : string, regen : number)
    {
        this.type = type;
        this.regen = regen;
        this.amount = 1;
    }

    getCompName() : string {return ResourceComp.compName};

    toString() : string
    {
        return "";
    }
}