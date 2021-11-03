import { IComponent } from "../IComponent";

export class PerceptionComp implements IComponent
{
    static compName = "Perception";

    constructor(){
    }

    getCompName() : string {return PerceptionComp.compName};

    toString() : string
    {
        return "perception comp";
    }
}