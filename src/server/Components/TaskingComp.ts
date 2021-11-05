import { assert, debug } from "console";
import stringHash from "string-hash";
import { IComponent } from "../IComponent";
import { Queue } from "../../types/Queue";
import { Vector2 } from "../../types/Vector2";

export const actions =
{
    none : 0,
    use : 1,
    pickup : 2,
    wait : 3,
    examine : 4
};

export class Task
{
    action : number;
    dest : Vector2;
    target : number;

    constructor(action : number, dest:Vector2, target? : number )
    {
        this.action = action;
        this.dest = dest;
        this.target = target;
    }

    equals(other : Task) : boolean
    {
        return other.target == this.target && other.action == this.action;
    }
}

export class TaskingComp implements IComponent
{
    static compName = "Tasking";
    static nameHash : number = stringHash(TaskingComp.compName);

    taskQueue : Queue<Task>;

    current : Task;

    constructor(){
        this.taskQueue = new Queue<Task>();
        this.current = null;
    }

    getCompName() : string {return TaskingComp.compName};
    getCompHash() : number {return TaskingComp.nameHash};

    toString() : string
    {
        return "tasking comp"
    }
    
}