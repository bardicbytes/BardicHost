import { Component } from "./Component";

export class DigestionComp extends Component
{
    stomach : number;
    energy : number;

    rate : number;

    constructor()
    {
        super();
        this.stomach = 0;
        this.energy = 1;
        this.rate = .01;
    }

    toString() : string
    {
        return "S="+this.stomach+", E="+this.energy;
    }
}