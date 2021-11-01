import * as fs from "fs";
import gameConfig from  '../GameConfig.json';

import { Entity } from "./Entity";
import { IComponent } from "./IComponent";
import { System } from "./System";

import * as Comps from "./Components";
import * as Systems from "./Systems";

const ticksPerMin = 10;
const savePerMin = 10;

export class BardGame
{
    tick = 0;
    systems : System[];
    entities : Entity[];

    startTime : Date;
    lastTime : Date;
    static ticksPerMin: number = ticksPerMin;
    
    entityMap : Map<number, Entity>;

    constructor(){
        console.log("constructing game");

        this.startTime = new Date();
        this.lastTime = new Date();

        this.entityMap = new Map<number,Entity>();

        this.entities = [
            new Entity("Adam", this.getNewPersonComps()),
            new Entity("Eve", this.getNewPersonComps()),
        ];

        this.refreshSystems();
    }

    getNewPersonComps(extraComps? : string[]) : string[] 
    {
        let comps  : string[] = [typeof Comps.BodyComp, typeof Comps.NavComp, typeof Comps.AnimalComp, typeof Comps.PerceptionComp];
        if(extraComps !== undefined) comps = comps.concat(extraComps);
        return comps;
    }

    getNewPlantComps(extraComps? : string[]) : string[] 
    {
        let comps : string[] = [typeof Comps.BodyComp, typeof Comps.VegetableComp]
        if(extraComps !== undefined) comps = comps.concat(extraComps);
        return comps;
    }

    getNewObjectComps(extraComps? : string[]) : string[]
    {
        let comps : string[] = [typeof Comps.BodyComp]
        if(extraComps !== undefined) comps = comps.concat(extraComps);
        return comps;
    }

    refreshSystems()
    {
        this.systems = [
            new Systems.DecisionSys(this.entities),
            new Systems.GrowthSys(this.entities),
            new Systems.MovementSys(this.entities),
            new Systems.NavigationSys(this.entities),
            new Systems.ResourceSys(this.entities),
            new Systems.SocialSys(this.entities),
        ];
    }

    toString(): string
    {
        let output = "";
        for(let i= 0 ;this.entities != null && i < this.entities.length; i++)
        {
            output += this.entities[i].toString();
            output += "<br />";
        }
        return output;
    }

    getContent(mode : string) : any
    {
        let content : any = {
            people : [],
        };
        for(let i = 0; i < this.entities.length; i++)
        {
            content.people.push(this.entities[i].toString());
        }
        return content;
    }

    getDeltaTime() : number
    {
        return (this.startTime.getTime() - this.lastTime.getTime());
    }

    Act(action : string) : void
    {
        this.update();
        console.log("Action "+action)
    }

    update() : void
    {
        let now = new Date();
        let dt =  this.lastTime.getTime() - now.getTime();

        for(let i = 0; i < this.systems.length; i++)
        {
            let s = this.systems[i];
            s.update(dt);
        }

        this.lastTime = now;
        this.tick++;
    }

    save()
    {
        let output :string = "output x " + this.lifeSeconds();
        fs.writeFile("../saveData.json", output, function(err) {
            if (err) {
                console.log(err);
            }
        });
    }

    load()
    {
        fs.readFile("../saveData.json",(err : NodeJS.ErrnoException, data: Buffer)=>{
            //set data
            this.refreshSystems();
        })
    }

    lifeSeconds() : number{
        let now = new Date();
        let life = now.getTime() - this.startTime.getTime();
        life /= 1000;
        return life;
    }

}