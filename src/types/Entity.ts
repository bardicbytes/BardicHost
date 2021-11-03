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
            let t = compTypes[i];
            //console.log("creating "+t)
            let c : IComponent = Comps.Create(t);
            this.components[i] = c;
            let h = stringHash(c.getCompName());
            this.compMap.set(h, c);
        }
        this.id = Entity.getNextID();
    }



    static getNextID() : number
    {
        let id : number = this.nextid;
        this.nextid++;
        return id;;
    }

    getComp<T extends IComponent>(classKey : string) : T
    {
        return this.compMap.get(stringHash(classKey)) as T
    }


    hasComponents(components : string[]) : boolean
    {
        //assert(components != null);
        for(let i = 0; components != null && i < components.length; i++)
        {
            if(!this.compMap.has(stringHash(components[i]))) {return false;}
        }
        return true;
    }

    toString(): string
    {
        let output = "";
        output = this.name;
        for(let i = 0; i < this.components.length; i++)
        {
            try
            {
                output +=this.components[i].toString();
            }
            catch(e : any)
            {
                output += "error";
            }
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