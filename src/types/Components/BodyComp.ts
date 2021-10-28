import { IComponent } from "../IComponent";

export class BodyComp implements IComponent
{
    x : number;
    y : number;

    radius : number;
    
    angle : number;

    delta : number;

    constructor(){
        this.x = Math.random() * 5;
        this.y = Math.random() * 5;
    }

    toString() : string
    {
        return "pos=("+Math.round(this.x)+","+Math.round(this.y)+")";
    }
}