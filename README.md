[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)     [![Github all releases](https://img.shields.io/github/downloads/muskanbararia/Hello-Node/total.svg)](https://GitHub.com/muskanbararia/Hello-Node/releases/)     [![GitHub issues](https://img.shields.io/github/issues/muskanbararia/Hello-Node.svg)](https://GitHub.com/muskanbararia/Hello-Node/issues/)      [![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm) 

# Hello-Node 

A simplied tutorial to understand the basics of NodeJS. Using NodeJS is now as simple as printing "Hello World".

## Index
1. [Hello-World](https://github.com/muskanbararia/Hello-Node#hello-world)
2. [Hello-Module](https://github.com/muskanbararia/Hello-Node#hello-module)
3. [Hello-File](https://github.com/muskanbararia/Hello-Node/blob/master/README.md#hello-file)

## [Hello-World](hello-node/hello-node.js)

Let's begin with our good old "Hello World" exercise, but this time using NodeJS. But wait, where should we print? How about on your browser?

#### Importing http module
In C, we need ```#include<stdio.h>``` to begin our program. ```stdio``` is a library.

In NodeJS, we need  ```require(http)``` to initialize our server. ```http``` is a module. We will learn more about modules in future exercises.

Include this code in your first node program to get you started.

 ```
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
```
First, We are importing ```http``` module to initialize the server. Afterwards, we are defining the host and the port where we want to see the output.

#### Creating server object

In C, we print *Hello World* inside ```int main()``` function. 

In NodeJS, we will print *Hello World* inside ```const server``` using ```createServer``` method.

Include the following code in your program to achieve this.

```
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});
```
Here, We are creating a server object to store ```createServer``` method. 
```res.statusCode=200``` => We will begin with setting the response code as 200, which indicates that everything is okay.
```res.setHeader``` Afterwards, we are setting the header of response as text, since we are printing text type content.
```res.end('Hello World!\n')``` Here comes our Hello World.

#### Initializing server

We will initialize our server with the host and port we provided earlier. 
We can print some message on console to ensure the proper working of our program.
```
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

#### Executing and checking the output

In C, we compile and execute the code to see the output.
In NodeJS, we will initiate the file and browse to port to see the output.

To initiate the file, navigate to ```hello-node```:
``` 
cd hello-node/
```
Afterwards, type the following command:
```
node hello-node.js
```
Voila! You must see an output like this:
```
Server running at http://127.0.0.1:3000/
```
It means everything is working fine. You can open this [link](http://127.0.0.1:3000/) in your browser to see the output.

To close the server, simply press Ctrl+C.

Congratulations, you have successfully printed *Hello World* using NodeJS.

## [Hello Module](https://github.com/muskanbararia/Hello-Node/tree/master/hello-module)

*Module to NodeJS is what library is to C.*

Modules can be divided in two categories: Built-in & Custom. Built-in modules, as name suggests, are default modules included in NodeJS which you can use without any further installation, much like your ```stdio.h``` or ```math.h``` whereas Custom modules are user defined modules or additional modules that you need to download seperately.

#### Built-in Module

We will revisit our http module to understand its functionality.
```
//importing the module
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

```

As you have already seen, we are importing http module and creating an object of it (```var http```). Afterwards, we are using ```createServer()``` method of http module, which we are calling using our http object.

#### Custom Module

Let's create our first NodeJS module to perform a simple task. We want a module for current date and time. We will create two files: myFirstModule.js which will contain our module logic, just as math.h library has some of its own logic in it, and second, hello-module.js, where we will import our custom made module to check its functionality, just as int main() will check for math.h.

##### [myFirstModule.js](https://github.com/muskanbararia/Hello-Node/blob/master/hello-module/myFirstModule.js)
```
//module to return current date and time
exports.myDateTime = function () {
    return Date();
};
```
```exports``` is a keyword to declare any function that we want to export or utilise with our module call. you can think of it as public specifier in your C++.
```myDateTime``` is a function that we have created in our module, just as ```sum``` is a method in math.h
```function()``` is a keyword to declare the function. Here we are not taking any parameters. If you want to pass the parameters, say a and b, you can use ```function(a,b)```. Similar to C, isn't it?
```return Date();``` is returning the result of Date function, i.e. current date and time. ```return``` here holds the same meaning as return of C methods.

#### [hello-module.js](https://github.com/muskanbararia/Hello-Node/blob/master/hello-module/hello-module.js)
Let's use our module to print the current date and time on the webpage.
First, Let's import our http module:
```
//creating an object of http module
const http = require('http');
```
Now, let's import our very own myFirstModule:
```
// creating an object of myFirst Module
const dt = require('./myFirstModule');
```
*Note: ./ is used because both myFirstModule and hello-module are in same directory. If myFirstModule is in different directory, say 'C://Desktop', replace the above code with:*
```
// creating an object of myFirst Module
const dt = require('C://Desktop/myFirstModule');
```
Let's declare the host and port number:
```
const hostname = '127.0.0.1';
const port = 3000;
```
Now, create a server using createServer of http:
```
//Creating server object to return the current Date & Time
const server = http.createServer((req, res) => {
```

Now let's call ```myDateTime``` and display it on webpage:
```
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(dt.myDateTime());
});
```

Finally, initialize the server:

```
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Execute:

```
cd hello-module/
node hello-module.js
```
It should print the following message on console:
```
Server running at http://127.0.0.1:3000/
```

It means everything is working fine. You can open this [link](http://127.0.0.1:3000/) in your browser to see the output.

To close the server, simply press Ctrl+C.

Congratulations, you have successfully created and utilized your very own module in NodeJS.

## Hello-file

Do you remember file handling in C, where we used to read data from a file, write into a file, delete file and so on? We will now try to do that using NodeJS. In C, we needed a FILE * to access files, here in NodeJS we need ```fs``` module to do that.
```
//creating an object of http module
var http = require('http');
// creating an object of fs module
var fs = require('fs');
```

#### [Read from a file](https://github.com/muskanbararia/Hello-Node/blob/master/hello-file/hello-file.js)

In C, we used to read data from a file and display it on console. In NodeJS, we will read data from a file and display the content on a webpage.

So, let's begin with declaring the host and port and creating an instance of server using ```createServer()```.
```
var hostname = '127.0.0.1';
var port = 3000;

//Creating server object to return the url
var server = http.createServer((req, res) => {
```

Now, we will need a file to read data from. So let's create an html file [one.html](https://github.com/muskanbararia/Hello-Node/blob/master/hello-file/one.html) that we want to display on our webpage.
```
<html>
<body>
<h1>My Header</h1>
<p>My paragraph.</p>
</body>
</html>
```

Now, we have to first read the content of this file.
```
var server = http.createServer((req, res) => {
	//reading data from html file
    fs.readFile('one.html', function(err, data) {
```

*Note: since my one.html and hello-file.js are in same module, I can access it directly. If it was in some other directory, say 'Desktop' my code would be:*
```
fs.readFile('C://Desktop/one.html', function(err, data)
```
*Note: Make sure that your one.html has necessary permissions to be accessed.*

here, ```err``` is a variable that will store the errors, if any, and ```data``` will store the content of the file.

Now, let's write the data on our webpage:
```
//Creating server object to return the url
var server = http.createServer((req, res) => {
	//reading data from html file
    fs.readFile('one.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //writing data to webpage
    res.write(data);
    res.end();
  });
});
```

It's time to initialize our server.
```
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
Execute:

```
cd hello-file
node hello-file
```
It should print the following message on console:
```
Server running at http://127.0.0.1:3000/
```

It means everything is working fine. You can open this [link](http://127.0.0.1:3000/) in your browser to see the output.

To close the server, simply press Ctrl+C.

Congratulations, you have successfully displayed one.html on your webpage.

#### [Write into file](https://github.com/muskanbararia/Hello-Node/blob/master/hello-file/hello-write.js)

```writeFile``` method of ```fs``` module will create a new file, if doesn't exist and replace file's content with provided content.
Let's see it through demo:
```
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
```

Execute the code:
```
cd hello-file
node hello-write.js
```
You will see that a new file *one.txt* will be created with *Hello content!* text. 
If you re-execute the code with some other content, it will replace the existing content.

#### [Append to file](https://github.com/muskanbararia/Hello-Node/blob/master/hello-file/hello-append.js)
append file is same as writeFile, just that instead of replacing the content of file, it appends the content to end of file.

```
//creating an object of http module
const http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

//Creating server object to return the url
const server = http.createServer((req, res) => {
	//reading data from html file
    fs.appendFile('one.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
	res.end("Done");
});

//initializing server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
```
cd hello-file
node hello-append.js
```
You will see that a new file *one.txt* will be created with *Hello content!* text, if it doesn't exist. 
If you are executing after executing hello-write, your one.txt will have *Hello Content!Hello content!*.

#### [Rename a file](https://github.com/muskanbararia/Hello-Node/blob/master/hello-file/hello-rename.js)
 If we want to rename one.txt to two.txt, we have to invoke ```rename``` method:
 ```
 
//creating an object of http module
const http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

//Creating server object to return the url
const server = http.createServer((req, res) => {
	//Rename file
	    fs.rename('one.txt', 'two.txt', function (err) {
  		if (err) throw err;
  		console.log('File Renamed!');
		});
		res.end("Done");
});

//initializing server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
 ```
 
Execute the code:
```
cd hello-file
node hello-rename.js
```
You will see that a new file *one.txt* will be renamed as *two.txt*.

#### [Delete a file](https://github.com/muskanbararia/Hello-Node/blob/master/hello-file/hello-delete.js)

To delete a file, we can use ```unlink``` method of fs module.

```
//creating an object of http module
const http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

//Creating server object to return the url
const server = http.createServer((req, res) => {
	//Deleting file
	    fs.unlink('two.txt', function (err) {
  		if (err) throw err;
  		console.log('File deleted!');
		});
		res.end("Done");
});

//initializing server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

```
Execute the code:
```
cd hello-file
node hello-delete.js
```
You will see that *two.txt* is deleted.

#### Hello-Package

It is impossible to talk about NodeJS without mentioning NPM. So what exactly is NPM? 
NPM is Node Package Manager which hosts thousands of free packages to download and use. To make a developer's life easy, there are already enough packages available to carry out your daily tasks. To download and use these packages, make sure that you have npm installed on your machine. You can follow the instructions from [here](https://www.npmjs.com/get-npm).

Now, Let's use a package to see how it works.
The package we will be using is *upper-case*. So let's first install this package.
```
npm install upper-case
```
After executing this command, you will see that a directory is created with name as *node_modules*. Inside that directory, all your packages that you've installed are stored.

Now, let's see how to use the package we just installed.
first, we have to import the packages.





