import { IComponent } from "../IComponent";

import gameConfig from  '../serverConfig.json';
import stringHash from "string-hash";

export class AnimalComp implements IComponent
{
    static compName : string = "Animal";
    static nameHash : number = stringHash(AnimalComp.compName);

    selectiveness : number;
    attractiveness : number;

    stomach : number;
    energy : number;
    energyStore : number;
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
    getCompHash() : number {return AnimalComp.nameHash};
    
    toString() : string
    {
        return this.getCompName();
    }

}