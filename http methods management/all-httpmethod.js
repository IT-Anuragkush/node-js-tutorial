const http=require('http');
const path = require('path');

const server=http.createServer(
    (req,res)=>{
        let body='';

        req.on('data',chunk=>{
            body+=chunk.toString();//convert Buffer to string
        });

        req.on('end',()=>{
            res.setHeader('Content-Type','application/json');
            if(req.url === '/home'){
                if(req.method==='GET' ){
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.end('This is GET method \n'+JSON.stringify(req.headers));
                }else if(req.method==='POST'){
                    // body=JSON.stringify(body);
                    // console.log(body)
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.end('This is Post method \n'+body
                    );
                }else if(req.method==='PUT'){
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.end('This is PUT method \n'+body);
                }else if(req.method==='PATCH'){
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.end('This is Patch method \n'+body);
                }else if(req.method==='DELETE'){
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.end('This is Delete method \n'+body);
                }
            }else if(req.url === '/login'){
                if(req.method==='GET' ){
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.end('This is GET/login method \n'+JSON.stringify(req.headers));
                }else if(req.method==='POST'){
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.end('This is Post/login method \n'+body);
                }else if(req.method==='PUT'){
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.end('This is PUT/login method \n'+body);
                }else if(req.method==='PATCH'){
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.end('This is Patch/login method \n'+body);
                }else if(req.method==='DELETE'){
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.end('This is Delete/login method \n'+body);
                }
            }
            else if(req.url === '/about'){
                if(req.method==='GET' ){
                    res.writeHead(200,{'Content-Type':'text/plain'});
                    res.end('This is GET/about method \n'+JSON.stringify(req.headers));
                }
            }
            

        })

    }
);


server.listen(8000,"127.0.0.1",()=>{
    console.log("server working on http://127.0.0.1:8000");
});