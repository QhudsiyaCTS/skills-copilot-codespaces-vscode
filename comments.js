// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.
const http = require('http');

const server = http.createServer((req, res) => { res.statusCode = 200; res.setHeader('Content-Type', 'text/plain'); res.end('Hello, world!'); });

server.listen(3000, 'localhost', () => { console.log('Server running at http://localhost:3000/'); });

