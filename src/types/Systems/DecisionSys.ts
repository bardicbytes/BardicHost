import { System } from "../System";

import { BodyComp } from "../Components/BodyComp";
import { NavComp } from "../Components/NavComp";
import { AnimalComp } from "../Components/AnimalComp";
import { MemoryComp } from "../Components/MemoryComp";

/*
phys:   digestion, home
safe:   landmark, memory:resources
social: SOCIAL, memory:social
esteem: awareness: quality
*/

export class DecisionSys extends System
{
    getComponentReqs() : string[]{
        return [typeof(NavComp), typeof(BodyComp)];
    }

    update(dt : number)
    {
        for(let i = 0; this.entities != null && i < this.entities.length; i++)
        {
            let e = this.entities[i];
            let body : BodyComp = e.getComp(typeof(BodyComp));
            let memory : MemoryComp = e.getComp(typeof(MemoryComp));
            let nav : NavComp = e.getComp(typeof(NavComp));
            let animal : AnimalComp = e.getComp(typeof(AnimalComp));

            //find current pressing need
            //check if new need is strong enough to abort current task

            if(animal.stomach < .5)
            {
                
            }
        }
    }
};