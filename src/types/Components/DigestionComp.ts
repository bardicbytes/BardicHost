import { IComponent } from "../IComponent";

export class DigestionComp implements IComponent
{
    stomach : number;
    energy : number;
    hydration : number;

    rate : number;

    constructor()
    {
        this.stomach = 0;
        this.energy = 1;
        this.rate = .01;
    }

    toString() : string
    {
        return "S="+this.stomach+", E="+this.energy;
    }
}