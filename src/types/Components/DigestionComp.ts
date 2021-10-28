import { IComponent } from "../IComponent";

export class DigestionComp implements IComponent
{
    stomach : number;
    energy : number;
    hydration : number;
    waste : number;

    rate : number;

    constructor()
    {
        this.hydration = 1;
        this.stomach = 0;
        this.energy = 1;
        this.rate = .01;
        this.waste = 0;
    }

    toString() : string
    {
        return "S="+this.stomach+", E="+this.energy;
    }
}