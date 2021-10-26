import { assert, debug } from "console";
import stringHash = require("string-hash");
import { Component } from "./Component";

export class Entity
{
    startTime : Date;
    name : string;
    components : Component[];

    compMap : Map<number, Component>;

    constructor(name : string, components : Component[]){
        this.startTime = new Date();
        this.name = name;
        assert(components != null && components.length >= 1);
        this.components = components;
        this.compMap = new Map<number,Component>();
        for(let i = 0; i < components.length; i++)
        {
            let c = components[i];
            this.compMap.set(stringHash(typeof c), c);
        }
    }

    getComp<T extends Component>(key : any) : T
    {
        return this.compMap.get(stringHash(typeof(key))) as T
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
        output = this.name+" "+this.lifeSeconds()+" sec. ";
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