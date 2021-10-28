import { IComponent } from "../IComponent";

export class LandmarkComp implements IComponent
{

    constructor(x:number,y:number, radius:number){
    }

    toString() : string
    {
        return "landmarkcomp";
    }
}