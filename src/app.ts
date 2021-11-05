
import { BardGame } from './server/BardGame';
import { createServer, IncomingMessage, ServerResponse } from 'http';
const pug = require('pug');
const url = require('url');

const port = 3000;
const debugPageFunc = pug.compileFile('./pugs/debug.pug');
const indexPageFunc = pug.compileFile('./pugs/index.pug');
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
    if(mode == undefined) 
    {
        mode = "index";
    }
    let content : any;
    let c :string = "";
    try
    {
        content = game.getContent(mode);
    }
    catch(e)
    {
        c = "error\n"+e;
    }
        
    if(mode == "index")
    {
        c = indexPageFunc(content);
    }
    else if(mode == "debug")
    {
        console.log(JSON.stringify(content, null, 4));
        c = debugPageFunc(content);
    }
    else if(mode == "state")
    {
        console.log("state content:\n"+content);
        c = content;
    }

    return c;
}