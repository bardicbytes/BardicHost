import { IComponent } from "../IComponent";

import gameConfig from  '../../GameConfig.json';

export class VegetableComp implements IComponent
{
    energy : number;
    hydration : number;
    
    constructor(){

    }

    toString() : string
    {
        return "VegetableComp";
    }

}