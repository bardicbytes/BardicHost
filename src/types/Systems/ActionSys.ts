import { System } from "../System";
import * as Comps from "../Components";
import { Entity } from "../Entity";

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
        
        if(animal.stomach < .5)
        {
            //queue and 
            tasker.taskQueue.push(new Comps.Task(Comps.actions.use,body.pos));
        }
    }
    

};