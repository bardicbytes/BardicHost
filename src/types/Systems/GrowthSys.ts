import { AnimalComp } from "../Components/AnimalComp";
import { System } from "../System";

export class GrowthSys extends System
{

    getComponentReqs() : string[]{
        return [typeof(AnimalComp)];
    }

    update(dt : number)
    {
        for(let i = 0; this.entities != null && i < this.entities.length; i++)
        {
            let e = this.entities[i];
            let animal : AnimalComp = e.getComp(AnimalComp);

            let a = animal.stomachRate * dt;
            let aActual = Math.min(a, animal.stomach, 1 - animal.energy);
            animal.energy += aActual;

        }
    }
};