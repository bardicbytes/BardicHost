export class BardConfig
{
    ticksPerMin : number = 10;
    savePerMin : number = 10;

    worldWrap :boolean = true;
    worldSize : number = 150;
    spawnRange : number = 10;
    circadianPeriod : number = 200;

    hungerThreash : number = 1/3;

    entities : string[] = [];
    entityComps : string[][];
}