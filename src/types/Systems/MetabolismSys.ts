import { DigestionComp } from "../Components/DigestionComp";
import { System } from "../System";

export class MetabolismSys extends System
{

    getComponentReqs() : string[]{
        return [typeof(DigestionComp)];
    }

    update(dt : number)
    {
        for(let i = 0; this.entities != null && i < this.entities.length; i++)
        {
            let e = this.entities[i];
            let dc : DigestionComp = e.getComp(DigestionComp);

            let a = dc.rate * dt;
            let aActual = Math.min(a, dc.stomach, 1 - dc.energy);
            dc.energy += aActual;

        }
    }
};