import { System } from "../System";

import { NavComp } from "../Components/NavComp";
import { BodyComp } from "../Components/BodyComp";

export class NavigationSys extends System
{
    getComponentReqs() : string[]{
        return [typeof(NavComp),typeof(BodyComp)];
    }

    update(dt : number)
    {
        for(let i = 0; this.entities != null && i < this.entities.length; i++)
        {
            let e = this.entities[i];
            let nav : NavComp = e.getComp((NavComp.compName));
            let landmark : BodyComp = e.getComp(BodyComp.compName);
        }
    }
};