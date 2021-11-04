import stringHash from "string-hash";
import { Type } from "typescript";
import { IComponent } from "../IComponent";

export class ResourceComp implements IComponent
{
    static compName = "Resource";
    static nameHash : number = stringHash(ResourceComp.compName);

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
    getCompHash() : number {return ResourceComp.nameHash};

    toString() : string
    {
        return "";
    }
}