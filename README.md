[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)     [![Github all releases](https://img.shields.io/github/downloads/muskanbararia/Hello-Node/total.svg)](https://GitHub.com/muskanbararia/Hello-Node/releases/)     [![GitHub issues](https://img.shields.io/github/issues/muskanbararia/Hello-Node.svg)](https://GitHub.com/muskanbararia/Hello-Node/issues/)      [![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm) 

# Hello-Node 

A simplied tutorial to understand the basics of NodeJS. Using NodeJS is now as simple as printing "Hello World".

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
