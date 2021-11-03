import { IComponent } from "../IComponent";

import gameConfig from  '../../GameConfig.json';

export class AnimalComp implements IComponent
{
    static compName = "Animal";

    selectiveness : number;
    attractiveness : number;

    stomach : number;
    energy : number;
    hydration : number;
    waste : number;

    stomachRate : number;

    constructor(){
        this.hydration = 1;
        this.stomach = 0;
        this.energy = 1;
        this.stomachRate = .01;
        this.waste = 0;
        this.selectiveness = .5;
        this.attractiveness = .5;
    }

    getCompName() : string {return AnimalComp.compName};
    
    toString() : string
    {
        return this.getCompName();
    }

}