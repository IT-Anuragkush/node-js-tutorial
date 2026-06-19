const http = require('http');

const server = http.createServer((req, res) => {
    // Handle different HTTP methods
    if (req.method === 'GET') {
        // Handle GET request
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('GET request received');
    } else if (req.method === 'POST') {
        // Handle POST request
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('POST request received');
    } else if (req.method === 'PUT') {
        // Handle PUT request
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('PUT request received');
    } else if (req.method === 'DELETE') {
        // Handle DELETE request
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('DELETE request received');
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end(`${req.method} method not allowed`);
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
