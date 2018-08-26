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
  var q = url.parse(req.url, true);
  	var txt = q.host //returns 'localhost:8080'
	txt += q.pathname; //returns '/default.htm'
	txt += q.search; //returns '?year=2017&month=february'

	var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
	console.log(qdata.month); //returns 'february'
  res.end(txt+' '+qdata.month);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});