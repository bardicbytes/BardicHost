import stringHash from "string-hash";
import { IComponent } from "../IComponent";
import { Vector2 } from "../Vector2";

export class BodyComp implements IComponent
{
    static compName = "Body";
    static nameHash : number = stringHash(BodyComp.compName);

    
    pos : Vector2;
    radius : number;
    angle : number;
    delta : number;

    constructor(){
        this.pos = new Vector2();
    }
    
    init(pos ? : Vector2){
        this.pos = pos !== undefined ? pos : new Vector2();
    }

    getCompName() : string {return BodyComp.compName};
    getCompHash() : number {return BodyComp.nameHash};

    toString() : string
    {
        return this.pos.toString();
    }
}