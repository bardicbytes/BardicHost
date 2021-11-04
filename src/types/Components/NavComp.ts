import { IComponent } from "../IComponent";

import gameConfig from  '../../config.json';
import { Vector2 } from "../Vector2";
import stringHash from "string-hash";

export class NavComp implements IComponent
{
    static compName = "Navigation";
    static nameHash : number = stringHash(NavComp.compName);


    active : boolean;

    dest : Vector2;

    constructor(dest? : Vector2){
        
        this.active = false;
        if(dest!==undefined)
        {
            this.dest = dest;
        }
        else
        {
            //let r =  gameConfig.spawnRange;
            //this.dest = new Vector2(Math.random() * r - r/2,Math.random() * r - r/2);
            this.dest = new Vector2();
        }

    }

    getCompName() : string {return NavComp.compName};
    getCompHash() : number {return NavComp.nameHash};


    toString() : string
    {
        if(!this.active)
        {
            return "";
        }
        return "dest = "+this.dest.toString;
    }
}