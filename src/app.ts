
import { BardGame } from './types/Game';
import { createServer, IncomingMessage, ServerResponse } from 'http';


const url = require('url');

const port = 3000;
const server = createServer(handleRequest);
const serverStartTime : Date = new Date();

let game = new BardGame();

loop();

function handleRequest(request: IncomingMessage, response: ServerResponse)
{
    const parsed = url.parse(request.url,true);
    //console.log("handleRequest "+request.url);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(getContent(parsed));
}

function getContent(parsed : any) : string
{
    let query = parsed.query;
    let action = query["action"];
    game.update();
    return game.toString();
}

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

function loop()
{
    game.update();
    let d = 1000/BardGame.ticksPerMin / 60;
    setTimeout(loop, d);
}

