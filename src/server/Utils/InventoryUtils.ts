import { BardGame } from "../BardGame";
import { InventoryComp } from "../Components";

export abstract class InventoryUtils 
{
    static Find(game : BardGame, root : InventoryComp, compReqs : string[], results? : number[]) : number[]
    {
        let r : number[] =  results !== undefined ? results : new Array<number>();

        for(let i = 0; i < root.pockets.length; i++)
        {
            let p = root.pockets[i];
            for(let j = 0; j < p.contents.length; j++)
            {
                let e = game.getEntity(p.contents[j]);
                if(e.hasComponent(InventoryComp.compName))
                {
                    let ic : InventoryComp = e.getComp(InventoryComp.compName);
                    r = InventoryUtils.Find(game,ic,compReqs,r);
                }

                if(e.hasComponents(compReqs))
                {
                    r.push(e.id);
                }
            }
        }

        return r;
    }
}