import { assert, debug } from "console";
import stringHash = require("string-hash");
import { IComponent } from "./IComponent";
import * as Comps from "./Components";
import gameConfig from  '../GameConfig.json';

export class Entity
{
    static nextid : number;
    startTime : Date;
    name : string;
    id : number;
    components : IComponent[];

    compMap : Map<number, IComponent>;

    constructor(name : string, compTypes : string[])
    {
        assert(compTypes !== undefined && compTypes.length >= 1);
        
        this.components = new Array<IComponent>(compTypes.length);
        for(let i = 0; i < compTypes.length; i++)        

        this.name = name;
        this.startTime = new Date();
        this.compMap = new Map<number,IComponent>();

        for(let i = 0; i < compTypes.length; i++)
        {
            
            //Object.create( as object)
            
            let c = this.components[i];
            this.compMap.set(stringHash(typeof c), c);
        }
        this.id = Entity.getNextID();
    }



    static getNextID() : number
    {
        let id : number = this.nextid;
        this.nextid++;
        return id;;
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