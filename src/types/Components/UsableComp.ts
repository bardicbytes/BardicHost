import stringHash from "string-hash";
import { IComponent } from "../IComponent";

export class UseableComp implements IComponent
{
    static compName = "Useable";
    static nameHash : number = stringHash(UseableComp.compName);

    constructor()
    {
    }

    getCompName() : string {return UseableComp.compName};
    getCompHash() : number {return UseableComp.nameHash};

    toString() : string
    {
        return "tasking comp"
    }

    onUse : Function;

    init(onUse : Function)
    {
        this.onUse = onUse;
    }

    use(context : any)
    {
        this.onUse(context);
    }
}