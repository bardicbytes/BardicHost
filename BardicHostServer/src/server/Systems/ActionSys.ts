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

export const actions =
{
    none : 0,
    use : 1,
    pickup : 2,
    wait : 3,
    examine : 4,
    eat : 5,
};


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
        let tasker : Comps.TaskingComp = e.getComp(Comps.TaskingComp.compName);
        let body : Comps.BodyComp = e.getComp(Comps.BodyComp.compName);

        //gather needs and tasks from components
        if(e.hasComponent(Comps.AnimalComp.compName))
        {
            this.updateAnimalComp(dt,e,e.getComp(Comps.AnimalComp.compName),tasker,body);
        }
        //process entity's tasks
        if(tasker.current !== undefined && tasker.current !== null)
        {
            this.processCurrentTask(e,tasker);

        }
    }

    processCurrentTask(e : Entity, tasker : Comps.TaskingComp)
    {
        let c = tasker.current;
        let hea
        if(c.action == actions.eat)
        {
            let animal = e.getComp<Comps.AnimalComp>(Comps.AnimalComp.compName);
            let targ = this.game.getEntity( c.target);
            let targFood =  targ.getComp<Comps.FoodComp>(Comps.FoodComp.compName);
            animal.stomach += targFood.quality
            tasker.current = null; 
        }
    }

    updateAnimalComp(dt : number, e : Entity, animal : Comps.AnimalComp, tasker : Comps.TaskingComp, body : Comps.BodyComp)
    {
        
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
                    tasker.taskQueue.push(new Comps.Task(actions.eat, body.pos, foodTargID));
                }
            }
        }
    }
    

};