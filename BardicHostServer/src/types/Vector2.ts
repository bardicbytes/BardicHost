export class Vector2
{
    x : number;
    y : number;

    constructor(x?:number,y?:number)
    {
        this.x = x !== undefined ? x : 0;
        this.y = y !== undefined ? y : 0;
    }

    add(other : Vector2)
    {
        this.x += other.x;
        this.y += other.y;
    }

    mult(val : number)
    {
        this.x *= val;
        this.y *= val;
    }

    toString() : string
    {
        return "("+Math.round(this.x/100)*100+", "+Math.round(this.y/100)*100+")";
    }

}