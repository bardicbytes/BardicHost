import { BodyComp } from "./BodyComp";
import { Entity } from "./Entity";
import { System } from "./System";

export class MeanderSys extends System
{
    getComponentReqs() : string[]{
        return ["BodyComp"];
    }

    update(dt : number)
    {
        for(let i = 0; this.entities != null && i < this.entities.length; i++)
        {
            let e = this.entities[i];
            let body : BodyComp = e.compMap.get("BodyComp") as BodyComp;
            
            body.x += body.xVel * dt;
            body.y += body.yVel * dt;
            body.xVel *= 1 - body.drag / 2;
            body.yVel *= 1 - body.drag / 2;

            if(body.xVel <= 2) body.xVel = 4;
        }
    }
};