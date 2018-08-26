//creating an object of http module
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//Creating server object to return the resultant html content
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

//initializing server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});