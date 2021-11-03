import { System } from "../System";

import { BodyComp } from "../Components/BodyComp";
import { NavComp } from "../Components/NavComp";
import { MemoryComp } from "../Components/MemoryComp";
import { AnimalComp } from "../Components/AnimalComp";


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
            let body : BodyComp = e.getComp(BodyComp.compName);
            let memory : MemoryComp = e.getComp(MemoryComp.compName);
            let nav : NavComp = e.getComp((NavComp.compName));
            let animal : AnimalComp = e.getComp((AnimalComp.compName));

            //find current pressing need
            //check if new need is strong enough to abort current task

            if(animal.stomach < .5)
            {
                
            }
        }
    }
};