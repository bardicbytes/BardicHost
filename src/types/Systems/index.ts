import { Entity } from "../Entity";

import { ActionSys } from "./ActionSys";
import { GrowthSys } from "./GrowthSys";
import { MovementSys } from "./MovementSys";
import { NavigationSys } from "./NavigationSys";
import { ResourceSys } from "./ResourceSys";
import { SocialSys } from "./SocialSys";

export * from "./ActionSys";
export * from "./GrowthSys";
export * from "./MovementSys";
export * from "./NavigationSys";
export * from "./ResourceSys";
export * from "./SocialSys";

export function init(entities : Entity[])
{
   return  [
        new ActionSys(entities),
        new GrowthSys(entities),
        new MovementSys(entities),
        new NavigationSys(entities),
        new ResourceSys(entities),
        new SocialSys(entities),
    ];
}