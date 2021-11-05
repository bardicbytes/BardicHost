import { Entity } from "./Entity";
import { BardGame } from "./BardGame";

export abstract class System
{
    game : BardGame;
    entities : Entity[];

    constructor(game : BardGame)
    {
        let entities : Entity[] = game.entities;
        
        this.game = game;
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