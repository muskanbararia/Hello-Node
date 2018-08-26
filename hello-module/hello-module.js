//creating an object of http module
const http = require('http');
// creating an object of myFirst Module
const dt = require('./myFirstModule');

const hostname = '127.0.0.1';
const port = 3000;

//Creating server object to return the current Date & Time
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(dt.myDateTime());
});

//initializing server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});