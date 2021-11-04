import stringHash from "string-hash";
import { IComponent } from "../IComponent";

export class PerceptionComp implements IComponent
{
    static compName = "Perception";
    static nameHash : number = stringHash(PerceptionComp.compName);
    

    constructor(){
    }

    getCompName() : string {return PerceptionComp.compName};
    getCompHash() : number {return PerceptionComp.nameHash};


    toString() : string
    {
        return "perception comp";
    }
}