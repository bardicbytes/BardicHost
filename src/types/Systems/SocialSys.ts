import { System } from "../System";

import { SocialComp } from "../Components/SocialComp";

export class SocialSys extends System
{
    getComponentReqs() : string[]{
        return [typeof(SocialComp)];
    }

    update(dt : number)
    {
        for(let i = 0; this.entities != null && i < this.entities.length; i++)
        {
            let e = this.entities[i];
            let soc : SocialComp = e.getComp(typeof(SocialComp));

            
        }
    }
};