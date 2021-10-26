import { BodyComp } from "./BodyComp";
import { NavComp } from "./NavComp";
import { System } from "./System";

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
            let nav : NavComp = e.getComp(typeof(NavComp));
            
        }
    }
};