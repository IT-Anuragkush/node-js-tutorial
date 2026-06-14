const http = require("http");
const PORT = 3456;

const server = http.createServer( (req, res)=>{
  if(req.url === '/'){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.end(`<h1 style="color:green;">Home page : indore mp</h1>`);
  }
  else if(req.url === '/about'){
    res.end("this is about page");
  }
});

server.listen(PORT, 'localhost',()=>{console.log("server started")});