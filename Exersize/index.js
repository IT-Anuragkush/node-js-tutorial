const http = require('http');

const server = http.createServer((req,res)=>{

  if(req.method === 'GET'){
    if(req.url === "/"){
      res.writeHead(200, {"Content-Type" : "text/plain"});

      res.end("Home page");
    }
    else if(req.url === "/about"){
      res.writeHead(200, {"Content-Type" : "text/plain"});

      res.end("this is about page");
    }
    else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("Page not found");
    }
  }
  
  else if(req.method === "POST"){
    console.log(req.url);
    if(req.url === "/login"){
      res.writeHead(200, {"Content-Type" : "text/plain"});

      res.end("login successful");
    }
    else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("Page not found");
    }
  }

  else if(req.method === "PUT"){
    res.writeHead(200, {"Content-Type" : "text/plain"});

    res.end("PUT request");
  }
  else if(req.method === "PATCH"){
    res.writeHead(200, {"Content-Type" : "text/plain"});

    res.end("PATCH request");
  }
  else if(req.method === "DELETE"){
    res.writeHead(200, {"Content-Type" : "text/plain"});

    res.end("DELETE request");
  }
  else{
    res.writeHead(404, {"Content-Type" : "text/plain"});

    res.end("not found");
  }
  
});

server.listen(3000, ()=>{
  console.log("server started at port 3000");
})