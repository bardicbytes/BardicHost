import stringHash from "string-hash";
import { IComponent } from "../IComponent";

export class MemoryComp implements IComponent
{
    static compName = "Memory";
    static nameHash : number = stringHash(MemoryComp.compName);
    
    constructor()
    {
    }

    getCompName() : string {return MemoryComp.compName};
    getCompHash() : number {return MemoryComp.nameHash};


    toString() : string 
    {
        return "memorycomp";
    }
}