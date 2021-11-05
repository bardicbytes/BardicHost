import { BodyComp } from "../server/Components";
import { Entity } from "../server/Entity";
import { Vector2 } from "./Vector2";

export class GameState
{
    entities : BodiedEntityData[];
    constructor()
    {
        this.entities = new Array<BodiedEntityData>();
    }
}

export class BodiedEntityData
{
    dispName : string;
    color : string;
    radius : number;
    pos : Vector2;
    angle : number;

    constructor(color : string, entity : Entity)
    {
        let bc : BodyComp = entity.getComp(BodyComp.compName);
        
        this.dispName = entity.displayName;
        this.color = color;

        this.radius = bc.radius;
        this.pos = bc.pos;
        this.angle = bc.angle;
    }
}