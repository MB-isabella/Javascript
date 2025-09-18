//const http = require('http');
import http from 'http';

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Oi mae lindaa\n');
}).listen(8080);

