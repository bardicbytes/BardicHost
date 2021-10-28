import { IComponent } from "../IComponent";

import gameConfig from  '../../GameConfig.json';

export class NavComp implements IComponent
{
    active : boolean;

    destX : number;
    destY : number;

    constructor(x?:number,y?:number){
        
        this.active = false;
        if(x!==undefined)
        {
            this.destX = Math.random() * 20 - 10;
        }
        if(y!=undefined)
        {
            this.destY = Math.random() * 20 - 10;
        }
    }



    toString() : string
    {
        return "("+Math.round(this.destX)+","+Math.round(this.destY)+")";
    }
}