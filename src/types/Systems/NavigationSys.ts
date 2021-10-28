import { System } from "../System";

import { NavComp } from "../Components/NavComp";

export class SocialSys extends System
{
    getComponentReqs() : string[]{
        return [typeof(NavComp)];
    }

    update(dt : number)
    {
        for(let i = 0; this.entities != null && i < this.entities.length; i++)
        {
            let e = this.entities[i];
            let nav : NavComp = e.getComp(typeof(NavComp));

            
        }
    }
};