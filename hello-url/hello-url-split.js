//creating an object of http & url module
const http = require('http');
var url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

//Creating server object to return the url
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //spliting url
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
});

//initializing server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});