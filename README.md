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
``` cd hello-node/```
Afterwards, type the following command:
```node hello-node.js```
Voila! You must see an output like this:
```Server running at http://127.0.0.1:3000/```
It means everything is working fine. You can open this [link](http://127.0.0.1:3000/) in your browser to see the output.

To close the server, simply press Ctrl+C.

Congratulations, you have successfully printed *Hello World* using NodeJS.


