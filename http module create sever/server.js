const http = require("http");
const PORT = 5656;

const server = http.createServer( (req, res)=>{
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // OPTIONS request handle
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }
  console.log(req.method, req.url);
  
  if(req.method === 'GET'){

    let headMenu = `
        <nav>
          <a href="http://localhost:5656/">Home</a>
          <a href="http://localhost:5656/about">About</a>
          <a href="http://localhost:5656/services">Services</a>
          <a href="http://localhost:5656/contact">Contact Us</a>
        </nav>
        `;
        // <a href="/">Home</a>     
        // <a href="/about">about</a>

    if(req.url === '/'){
      res.writeHead(200, {"Content-Type":"text/html"});
      res.end(`${headMenu}<br>
        <a href="http://localhost:5656/">Home</a>
        <h1 style="color: red; background-color:blue;">home page</h1>`);
    }
    else if(req.url === '/about'){
      res.writeHead(200, {"content-Type":"text/html"});
      res.end(`${headMenu}<h1 style="color: red; background-color:orange;">about page</h1>`);
    }
    else if(req.url === '/services'){
      res.writeHead(200, {"content-Type":"text/html"});
      res.end(`${headMenu}<h1 style="color: red; background-color:yellow;">services page</h1>`);
    }
    else if(req.url === '/contact'){
      res.writeHead(200, {"content-Type":"text/html"});
      res.end(`${headMenu}<h1 style="color: red; background-color:pink;">contact page</h1>`);
    }
    else{
      res.writeHead(404, {"content-Type":"text/html"});
      res.end(`${headMenu}<h1 style="color: white; background-color:red;">404 page not found</h1>`);
    }
  }
  else if(req.method === 'POST')
  {
    if(req.url === "/login"){
      res.writeHead(200, {"Content-Type":"text/html"});
      
      res.end(`<h1 style="color: red; background-color:blue;">login successfully</h1>`)
    }
    else{
      res.writeHead(400, {"Content-Type":"text/html"});
  
      res.end(`<h1 style="color: red; background-color:red;">400 bad request(${req.method})</h1>`)
    }
  }
  else if(req.method === 'PUT')
  {
    if(req.url === "/edit"){
      res.writeHead(200, {"Content-Type":"text/html"});
      
      res.end(`<h1 style="color: red; background-color:blue;">put request for edit</h1>`)
    }
    else{
      res.writeHead(400, {"Content-Type":"text/html"});
  
      res.end(`<h1 style="color: red; background-color:red;">400 bad request(${req.method})</h1>`)
    }
  }
  else if(req.method === 'PATCH')
  {
    if(req.url === "/singleupdate"){
      res.writeHead(200, {"Content-Type":"text/html"});
      
      res.end(`<h1 style="color: red; background-color:blue;">PATCH request for edit data</h1>`)
    }
    else{
      res.writeHead(400, {"Content-Type":"text/html"});
  
      res.end(`<h1 style="color: red; background-color:red;">400 bad request(${req.method})</h1>`)
    }
  }
  else if(req.method === 'DELETE')
  {
    if(req.url === "/delete"){
      res.writeHead(200, {"Content-Type":"text/html"});
      
      res.end(`<h1 style="color: red; background-color:blue;">DELETE request for delete data</h1>`)
    }
    else{
      res.writeHead(400, {"Content-Type":"text/html"});
  
      res.end(`<h1 style="color: red; background-color:red;">400 bad request(${req.method})</h1>`)
    }
  }
})

server.listen(PORT, 'localhost' , ()=>{ console.log(`server started at http://localhost:${PORT}`)});