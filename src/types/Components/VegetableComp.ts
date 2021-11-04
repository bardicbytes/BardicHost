import { IComponent } from "../IComponent";

import gameConfig from  '../../config.json';
import stringHash from "string-hash";

export class VegetableComp implements IComponent
{
    static compName = "Vegetable";
    static nameHash : number = stringHash(VegetableComp.compName);


    energy : number;
    hydration : number;
    
    constructor(){

    }

    getCompName() : string {return VegetableComp.compName};
    getCompHash() : number {return VegetableComp.nameHash};

    toString() : string
    {
        return "VegetableComp";
    }

}