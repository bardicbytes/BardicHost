import { IComponent } from "../IComponent";

import gameConfig from  '../../GameConfig.json';

export class BioRythComp implements IComponent
{
    periodTicks : number;

    constructor(){
        this.periodTicks = gameConfig.periodTicks;
    }

    toString() : string
    {
        return "BioRythComp";
    }
}