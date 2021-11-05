import { Entity } from "./Entity";

export abstract class System
{
    entities : Entity[];

    constructor(entities : Entity[])
    {
        for(let i = 0; i < entities.length; i++)
        {
            let e = entities[i];
            if(e.hasComponents(this.getComponentReqs()))
            {
                this.entities.push(e);
            }
        }
    }


    abstract getComponentReqs() : string[];
    abstract update(dt : number) : void;
}