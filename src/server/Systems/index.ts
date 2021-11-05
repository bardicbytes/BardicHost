import { BardGame } from "../BardGame";
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

export function init(game : BardGame)
{
   return  [
        new ActionSys(game),
        new GrowthSys(game),
        new MovementSys(game),
        new NavigationSys(game),
        new ResourceSys(game),
        new SocialSys(game),
    ];
}