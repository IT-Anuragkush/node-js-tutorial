const http = require("http");
const fs = require("fs");
const path = require('path');

const server = http.createServer( (req, res)=>{

  let body = '';

  req.on('data', chunk =>{
    body += chunk.toString(); //convert buffer to string
  });

  req.on('end', ()=>{
    // set responce headers
    res.setHeader( "Content-Type", "application/json" );

    // handle defference http methods
    if(req.method === 'GET'){
      res.writeHead(200, {"Content-Type": "text/plain"});

      res.end("GET request received with headers " + JSON.stringify(req.headers));
      
    }
    else if(req.method === 'POST' && req.url === "/login"){

      res.writeHead(200, {"Content-Type": "text/plain"});
      res.end("POST request received with body : " + body + '\n headers : ' + JSON.stringify(req.headers));
      
    }
    else if(req.method === 'PUT' && req.url === "/edit"){
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.end("PUT request received with body : " + body + '\n headers : ' + JSON.stringify(req.headers));

    }
    else if(req.method === 'PUTCH' && req.url === "/singleupdate"){
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.end("PUTCH request received with body : " + body + '\n headers : ' + JSON.stringify(req.headers));

    }
    else if(req.method === 'DELETE' && req.url === "/delete"){
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.end("DELETE request received with body : " + body + '\n headers : ' + JSON.stringify(req.headers));

    }
    else{
      res.writeHead(405, {'Content-Type' : 'text/plain'});
      res.end(`${req.method} method not allowed`);
    }

  });

});
  
const PORT = 8000;

server.listen(PORT, '127.0.0.1',  ()=>{
  console.log(`server started at port ${PORT}`);
})