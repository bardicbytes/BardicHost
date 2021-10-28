import { System } from "../System";

import { BodyComp } from "../Components/BodyComp";
import { NavComp } from "../Components/NavComp";
import { DigestionComp } from "../Components/DigestionComp";
import { ReproductionComp } from "../Components/ReproductionComp";

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
            let digestion : DigestionComp = e.getComp(typeof(DigestionComp));
            let repro : ReproductionComp = e.getComp(typeof(ReproductionComp));
            
        }
    }
};