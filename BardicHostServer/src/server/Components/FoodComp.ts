import stringHash from "string-hash";
import { IComponent } from "../IComponent";

import { BardConfig } from "../BardConfig";
const config : BardConfig = require("../serverConfig.json");

export class FoodComp implements IComponent
{
    static compName = "Food";
    static nameHash : number = stringHash(FoodComp.compName);

    quality : number;
    
    constructor()
    {
        this.quality = config.baseFoodQuality;
    }

    getCompName() : string {return FoodComp.compName};
    getCompHash() : number {return FoodComp.nameHash};


    toString() : string 
    {
        return "FoodComp";
    }
}