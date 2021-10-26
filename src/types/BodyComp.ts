import { Component } from "./Component";

export class BodyComp extends Component
{
    x : number;
    y : number;
    xVel : number;
    yVel : number;

    drag : number;

    constructor(){
        super();
        this.drag = .05;
        this.x = Math.random() * 5;
        this.y = Math.random() * 5;
    }

    toString() : string
    {
        return "("+Math.round(this.x)+","+Math.round(this.y)+")";
    }
}