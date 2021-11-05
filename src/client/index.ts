let ticksPerSec : number = 2;
    
let tick : number = 0;
let startTime : Date = new Date();
let lastTime : Date = startTime;

let lastData : any;

function loop()
{
    let d = (1000/(ticksPerSec));

    setTimeout(()=>{
        update();
        loop();
    }, d);
}

function update()
{
    fetch('http://localhost:3000?m=state')
    .then(response => response.json()).then(apply);
}

function apply( myJson : any){
    // try
    // {
    //     lastData = JSON.parse(myJson);
    // }
    // catch(e)
    // {
    //     //console.log("error with "+myJson+"\n"+e)
    //     return;
    // }
    lastData = myJson;

    let now = new Date();
    let dt =  now.getTime() - lastTime.getTime();

    try
    {
        let el = document.getElementById("gamearea");
        el.innerHTML = "";
        for(let i = 0; i < lastData.entities.length;i++)
        {
            let e = lastData.entities[i];//BodiedEntityData
            el.innerHTML += "<div class=entity id="+e.id+">"+e.dispName+"</div>";
            document.getElementById(e.id).style.top = (e.pos.y / 2)+"%";
            document.getElementById(e.id).style.left = (e.pos.x / 2)+"%";
        }
    }
    catch(e){
        console.log("error filling html");
        return;
    }

    lastTime = now;
    tick++;

}

loop();