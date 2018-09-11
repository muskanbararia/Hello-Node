//creating an object of http module
var http = require('http');
// creating an object of fs module
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

//Creating server object to return the url
var server = http.createServer((req, res) => {
	//reading data from html file
    fs.readFile('one.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

//initializing server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
