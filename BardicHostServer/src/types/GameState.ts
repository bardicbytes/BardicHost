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
    id : number;
    dispName : string;
    color : string;
    radius : number;
    pos : Vector2;
    angle : number;

    constructor(entity : Entity)
    {
        let bc : BodyComp = entity.getComp(BodyComp.compName);

        this.dispName = entity.displayName;
        this.color = entity.color;
        this.id = entity.id;
        this.radius = bc.radius;
        this.pos = bc.pos;
        this.angle = bc.angle;
    }
}