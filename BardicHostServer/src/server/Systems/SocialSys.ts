import { System } from "../System";

import { AnimalComp } from "../Components/AnimalComp";

export class SocialSys extends System
{
    getComponentReqs() : string[]{
        return [typeof(AnimalComp)];
    }

    update(dt : number)
    {
        for(let i = 0; this.entities != null && i < this.entities.length; i++)
        {
            let e = this.entities[i];
            let soc : AnimalComp = e.getComp((AnimalComp.compName));

            
        }
    }
};