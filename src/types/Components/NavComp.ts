import { IComponent } from "../IComponent";

import gameConfig from  '../../GameConfig.json';
import { Vector2 } from "../Vector2";

export class NavComp implements IComponent
{
    static compName = "Navigation";

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
            let r =  gameConfig.spawnRange;
            this.dest = new Vector2(Math.random() * r - r/2,Math.random() * r - r/2);
        }

    }

    getCompName() : string {return NavComp.compName};

    toString() : string
    {
        if(!this.active)
        {
            return "";
        }
        return "dest = "+this.dest.toString;
    }
}