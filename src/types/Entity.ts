import { assert, debug } from "console";
import stringHash = require("string-hash");
import { IComponent } from "./IComponent";

import gameConfig from  '../GameConfig.json';

export class Entity
{
    startTime : Date;
    name : string;
    components : IComponent[];

    compMap : Map<number, IComponent>;

    constructor(name : string, components : IComponent[]){
        this.startTime = new Date();
        this.name = name;
        assert(components != null && components.length >= 1);
        this.components = components;
        this.compMap = new Map<number,IComponent>();
        for(let i = 0; i < components.length; i++)
        {
            let c = components[i];
            this.compMap.set(stringHash(typeof c), c);
        }
    }

    getComp<T extends IComponent>(classKey : any) : T
    {
        return this.compMap.get(stringHash(typeof(classKey))) as T
    }


    hasComponents(components : string[]) : boolean
    {
        //assert(components != null);
        for(let i = 0; components != null && i < components.length; i++)
        {
            if(!this.compMap.has(stringHash(typeof components[i]))) {return false;}
        }
        return true;
    }

    toString(): string
    {
        let output = "";
        output = this.name;
        for(let i = 0; i < this.components.length; i++)
        {
            output +="\n"+this.components[i].toString();
        }
        return output;
    }

    lifeSeconds() : number{
        let now = new Date();
        let life = now.getTime() - this.startTime.getTime();
        life /= 1000;
        return life;
    }

}