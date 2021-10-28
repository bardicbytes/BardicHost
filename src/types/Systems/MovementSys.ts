import { BodyComp } from "../Components/BodyComp";
import { NavComp } from "../Components/NavComp";
import { System } from "../System";

export class MovementSys extends System
{
    getComponentReqs() : string[]{
        return [typeof(NavComp), typeof(BodyComp)];
    }

    update(dt : number)
    {
        for(let i = 0; this.entities != null && i < this.entities.length; i++)
        {
            let e = this.entities[i];
            let nav : NavComp = e.getComp(typeof(NavComp));
            if(nav.active)
            {
                return;
            }
            let body : BodyComp = e.getComp(typeof(BodyComp));

            
            
        }
    }
};