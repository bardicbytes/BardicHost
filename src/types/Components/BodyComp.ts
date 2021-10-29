import { IComponent } from "../IComponent";
import { Vector2 } from "../Vector2";

export class BodyComp implements IComponent
{
    pos : Vector2;
    radius : number;
    angle : number;
    delta : number;

    constructor(pos ? : Vector2){
        this.pos = pos !== undefined ? pos : new Vector2();
    }

    toString() : string
    {
        return this.pos.toString();
    }
}