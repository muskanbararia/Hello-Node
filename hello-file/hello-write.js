//creating an object of http module
const http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

//Creating server object to return the url
const server = http.createServer((req, res) => {
	//Writing content in file
	    fs.writeFile('one.txt', 'Hello content!', function (err) {
	  	if (err) throw err;
	  	console.log('Saved!');
		});
	    res.end("Done");
});

//initializing server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
