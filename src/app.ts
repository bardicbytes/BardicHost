
import { BardGame } from './types/Game';
import { createServer, IncomingMessage, ServerResponse } from 'http';
const pug = require('pug');
const url = require('url');

const port = 3000;
const indexFunction = pug.compileFile('./pugs/index.pug');
const server = createServer(handleRequest);
const game : BardGame = new BardGame();;

server.listen(port, listenCallback);

function listenCallback() {
    //console.log(`Server listening on port ${port}`);
}

function handleRequest(request: IncomingMessage, response: ServerResponse)
{
    const parsed = url.parse(request.url,true);
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    let query = parsed.query;
    let action : string = query["a"];
    let mode : string = query["m"];

    if(action !== undefined) {game.Act(action);}

    response.end(getContent(mode));
}

function getContent(mode : string) : string
{
    try
    {
        let vars : any = game.getContent(mode);
        console.log(JSON.stringify(vars, null, 4));
        let c = indexFunction(vars);
        return c;
    }
    catch(e)
    {
        return "error\n"+e;
    }
}





