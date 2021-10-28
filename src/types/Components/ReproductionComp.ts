import { IComponent } from "../IComponent";

export class ReproductionComp implements IComponent
{
    selectiveness : number;
    attractiveness : number;

    constructor(){
        this.selectiveness = .5;
        this.attractiveness = .5;
    }

    toString() : string
    {
        return "reprocomp";
    }
}