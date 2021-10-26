import { BodyComp } from "./BodyComp";
import { Entity } from "./Entity";
import { MeanderSys } from "./MeanderSys";
import { System } from "./System";

const ticksPerMin = 10;

export class BardGame
{
    tick = 0;
    systems : System[];
    entities : Entity[];

    startTime : Date;
    lastTime : Date;
    static ticksPerMin: number = ticksPerMin;

    constructor(){
        console.log("constructing game");

        this.startTime = new Date();
        this.lastTime = new Date();

        this.entities = [
            new Entity("Adam", [new BodyComp()]),
            new Entity("Eve", [new BodyComp()])
        ];

        this.systems = [
            new MeanderSys(this.entities),

        ];
    }

    toString(): string
    {
        let output = "";
        for(let i= 0 ;this.entities != null && i < this.entities.length; i++)
        {
            output += this.entities[i].toString();
            output += "<br />";
        }
        return output;
    }

    getDeltaTime() : number
    {
        return (this.startTime.getTime() - this.lastTime.getTime());
    }

    update() : void
    {
        let now = new Date();
        let dt =  this.lastTime.getTime() - now.getTime();

        for(let i = 0; i < this.systems.length; i++)
        {
            let s = this.systems[i];
            s.update(dt);
        }

        this.lastTime = new Date();
        this.tick++;
    }

}