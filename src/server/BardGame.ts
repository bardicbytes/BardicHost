import * as fs from "fs";
import { BodiedEntityData, GameState } from "../types/gameState";

import { BardConfig } from "./BardConfig";
const config : BardConfig = require("../config.json");

import { Entity } from "./Entity";
import { System } from "./System";

import * as Sys from "./Systems";
import * as Comps from "./Components";


export class BardGame
{
    tick = 0;
    systems : System[];
    entities : Entity[];

    startTime : Date;
    lastTime : Date;
    static ticksPerMin: number = config.ticksPerMin;
    
    entityMap : Map<number, Entity>;
    compConstructorMap : Map<number, Function>;

    constructor(){
        console.log("constructing game");

        this.startTime = new Date();
        this.lastTime = new Date();

        this.entityMap = new Map<number,Entity>();
        this.entities = new Array<Entity>(config.entities.length);

        console.log("initializing entities");
        
        for(let i = 0; i < this.entities.length; i++)
        {
            let e : Entity= new Entity(config.entities[i], config.entityComps[i]);
            this.entities[i] = e;
            this.entityMap.set(e.id,e);
        }

        console.log("initializing main systems");
        
        this.systems = Sys.init(this);
        
        console.log("starting loop");
        //startGameLoop
        this.loop(this);
    }

    loop(g : BardGame)
    {
        let d = (1000/(BardGame.ticksPerMin / 60));

        setTimeout(()=>{
            g.update();
            this.loop(g);
        }, d);
    }

    update()
    {
        
        let now = new Date();
        let dt =  now.getTime() - this.lastTime.getTime();
        //console.log("update... "+(dt/1000))

        for(let i = 0; i < this.systems.length; i++)
        {
            let s = this.systems[i];
            s.update(dt);
        }

        this.lastTime = now;
        this.tick++;
    }

    toString(): string
    {
        let output = "";
        for(let i= 0 ;this.entities != null && i < this.entities.length; i++)
        {
            try
            {
                output += this.entities[i].toString();
                output += "<br />";
            }
            catch(e : any)
            {
                output += e;
                output += "<br />";
            }
        }
        return output;
    }

    getDeltaTime() : number
    {
        return (this.startTime.getTime() - this.lastTime.getTime());
    }

    Act(action : string)
    {
        this.update();
        console.log("Action "+action)
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
            this.systems = Sys.init(this);
        })
    }

    lifeSeconds() : number{
        let now = new Date();
        let life = now.getTime() - this.startTime.getTime();
        life /= 1000;
        return life;
    }

    getEntity(id:number) : Entity
    {
        return this.entityMap.get(id);
    }

    regEntity(entity : Entity)
    {
        this.entities.push(entity);
    }

    getContent(mode : string) : any
    {
        let content : any;

        if(mode == "index")
        {
            return this.getIndexContent();
        }
        if(mode == "debug")
        {
            return this.getDebugContent();
        }
        if(mode == "state")
        {
            return this.getStateContent();
        }
        
        return content;
    }

    getStateContent() : string
    {
        //return full json data for client
        let data : GameState = new GameState();
        for(let i = 0; i < this.entities.length; i++)
        {
            let e = this.entities[i];
            let hasBody : boolean = e.hasComponent(Comps.BodyComp.compName);
            if(!hasBody) continue;
            
            data.entities.push(new BodiedEntityData(e));
        }
        return JSON.stringify(data);
    }

    getIndexContent() : any
    {
        let content : any = {
            entities : [],
        };

        for(let i = 0; i < this.entities.length; i++)
        {
            try
            {
                content.people.push(this.entities[i].displayName);
                
            }
            catch(e){
                content.people.push(e);
            }
        }
        
        return content;
    }
    
    getDebugContent() : any
    {
        let content : any = {
            people : [],
        };

        for(let i = 0; i < this.entities.length; i++)
        {
            try
            {
                content.people.push(this.entities[i].toString());
                
            }
            catch(e){
                content.people.push(e);
            }
        }
        
        return content;
    }

}