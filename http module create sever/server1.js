// import http from node js
const http = require("http");
const PORT = 5656;

// console.log(http);

const server = http.createServer( (req, res)=>{
  // console.log(req);

  // set the responce http headers with status code and content type 
  // res.writeHead(200, {"content-Type":"text/plain"});
  res.writeHead(200, {"content-Type":"text/html"});
  // res.writeHead(200, {"content-Type":"text/json"});

  let data = { "resCode" : 200, "msg" : "this is home page"}
  // responce send in the body
  // res.end("home page");
  res.end(`<h1 style="color: red; background-color:blue;">home page</h1>`);
  // res.end(JSON.stringify(data));
})

server.listen(PORT, 'localhost' , ()=>{ console.log(`server started at http://localhost:${PORT}`)});