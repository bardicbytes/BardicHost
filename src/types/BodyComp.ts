import { Component } from "./Component";

export class BodyComp extends Component
{
    x : number;
    y : number;

    delta : number;

    constructor(){
        super();
        this.x = Math.random() * 5;
        this.y = Math.random() * 5;
    }

    toString() : string
    {
        return "("+Math.round(this.x)+","+Math.round(this.y)+")";
    }
}