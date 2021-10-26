import { Component } from "./Component";

export class NavComp extends Component
{
    active : boolean;

    destX : number;
    destY : number;

    constructor(){
        super();
        this.active = false;
        this.destX = Math.random() * 20 - 10;
        this.destY = Math.random() * 20 - 10;
    }

    toString() : string
    {
        return "("+Math.round(this.destX)+","+Math.round(this.destY)+")";
    }
}