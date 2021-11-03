import { IComponent } from "../IComponent";

export class MemoryComp implements IComponent
{
    static compName = "Memory";
    
    constructor(){
    }

    getCompName() : string {return MemoryComp.compName};

    toString() : string 
    {
        return "memorycomp";
    }
}