import { System } from "../System";
import * as Comps from "../Components";
import { Entity } from "../Entity";
import { formatDiagnostic } from "typescript";

import { BardConfig } from "../BardConfig";
import { InventoryUtils } from "../Utils/InventoryUtils";
const config : BardConfig = require("../serverConfig.json");
/*
phys:   digestion, home
safe:   landmark, memory:resources
social: SOCIAL, memory:social
esteem: awareness: quality
*/

export class ActionSys extends System
{
    getComponentReqs() : string[]{
        return [typeof(Comps.TaskingComp),typeof(Comps.BodyComp)];
    }

    update(dt : number)
    {
        for(let i = 0; this.entities != null && i < this.entities.length; i++)
        {
            this.updateEntity(dt,this.entities[i]);
        }
    }

    updateEntity(dt : number, e : Entity)
    {
        if(e.hasComponent(Comps.AnimalComp.compName)) 
            this.updateAnimalComp(dt,e,e.getComp(Comps.AnimalComp.compName));

    }

    updateAnimalComp(dt : number, e : Entity, animal : Comps.AnimalComp)
    {
        let tasker : Comps.TaskingComp = e.getComp(Comps.TaskingComp.compName);
        let body : Comps.BodyComp = e.getComp(Comps.BodyComp.compName);
        
        if(animal.stomach < config.hungerThreash)
        {
            if(e.hasComponent(Comps.InventoryComp.compName))
            {
                let foodTargID : number;
                let inv : Comps.InventoryComp = e.getComp(Comps.InventoryComp.compName);
                let ids : number[] = InventoryUtils.Find(this.game,inv,[Comps.FoodComp.compName])
                if(foodTargID == undefined && ids.length >= 0){
                    foodTargID = ids[0];
                }
                if(foodTargID !== undefined)
                {
                    tasker.taskQueue.push(new Comps.Task(Comps.actions.use, body.pos, foodTargID));
                }
            }
        }
    }
    

};