import stringHash from "string-hash";
import { IComponent } from "../IComponent";

import {AnimalComp} from "./AnimalComp";
import {BodyComp} from "./BodyComp";
import {InventoryComp} from "./InventoryComp";
import {MemoryComp} from "./MemoryComp";
import {NavComp} from "./NavComp";
import {PerceptionComp} from "./PerceptionComp";
import {VegetableComp} from "./VegetableComp";
import {TaskingComp} from "./TaskingComp";

export * from "./AnimalComp";
export * from "./BodyComp";
export * from "./MemoryComp";
export * from "./InventoryComp";
export * from "./NavComp";
export * from "./PerceptionComp";
export * from "./VegetableComp";
export * from "./TaskingComp";

export * from "../IComponent";

let  compConstructorMap : Map<number, Function> = new Map<number, Function>();

compConstructorMap.set(stringHash( AnimalComp.compName), () : AnimalComp => new AnimalComp());
compConstructorMap.set(stringHash( BodyComp.compName), () : BodyComp => new BodyComp());
compConstructorMap.set(stringHash( MemoryComp.compName), () : MemoryComp => new MemoryComp());
compConstructorMap.set(stringHash( InventoryComp.compName), () : InventoryComp => new InventoryComp());
compConstructorMap.set(stringHash( NavComp.compName), () : NavComp => new NavComp());
compConstructorMap.set(stringHash( PerceptionComp.compName), () : PerceptionComp => new PerceptionComp());
compConstructorMap.set(stringHash( VegetableComp.compName), () : VegetableComp => new VegetableComp());
compConstructorMap.set(stringHash( TaskingComp.compName), () : TaskingComp => new TaskingComp());

export function Create(name : string) : IComponent
{
    let key : number = stringHash(name);
    let c = compConstructorMap.get(key);
    let newComp : IComponent = c();
    if(!newComp || newComp == undefined) console.error("new component is null? "+newComp);
   // else console.log(typeof newComp +" created from "+name);
    return newComp;
}