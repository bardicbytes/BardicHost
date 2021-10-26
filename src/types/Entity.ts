import { assert, debug } from "console";
import { Component } from "./Component";

export class Entity
{
    startTime : Date;
    name : string;
    components : Component[];
    compMap : Map<string, Component>;


    constructor(name : string, components : Component[]){
        this.startTime = new Date();
        this.name = name;
        assert(components != null && components.length >= 1);
        this.components = components;
        this.compMap = new Map<string,Component>();
        for(let i = 0; i < components.length; i++)
        {
            let c = components[i];
            this.compMap.set(typeof c, c);
        }
    }

    hasComponents(components : string[]) : boolean
    {
        //assert(components != null);
        for(let i = 0; components != null && i < components.length; i++)
        {
            if(!this.compMap.has(typeof components[i])) {return false;}
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