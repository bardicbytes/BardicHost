import { IComponent } from "../IComponent";

export class MemoryComp implements IComponent
{
    constructor(){
    }

    toString() : string
    {
        return "memorycomp";
    }
}