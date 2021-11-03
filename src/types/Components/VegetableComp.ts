import { IComponent } from "../IComponent";

import gameConfig from  '../../GameConfig.json';

export class VegetableComp implements IComponent
{
    static compName = "Vegetable";
    energy : number;
    hydration : number;
    
    constructor(){

    }

    getCompName() : string {return VegetableComp.compName};

    toString() : string
    {
        return "VegetableComp";
    }

}