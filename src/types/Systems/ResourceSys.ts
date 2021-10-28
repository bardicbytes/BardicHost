import { System } from "../System";

import { ResourceComp } from "../Components/ResourceComp";

export class ResourceSys extends System
{
    getComponentReqs() : string[]{
        return [typeof(ResourceComp)];
    }

    update(dt : number)
    {
        for(let i = 0; this.entities != null && i < this.entities.length; i++)
        {
            let e = this.entities[i];
            let res : ResourceComp = e.getComp(typeof(ResourceComp));
            if(res.amount < 1)
            {
                res.amount += Math.min(res.regen * dt, 1 - res.amount);
            }
            
        }
    }
};