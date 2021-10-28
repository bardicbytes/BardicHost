import { IComponent } from "../IComponent";

export class HomeComp implements IComponent
{
    x : number;
    y : number;
    radius : number;

    constructor(x:number,y:number, radius:number){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    toString() : string
    {
        return "homecomp";
    }
}