[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)     [![Github all releases](https://img.shields.io/github/downloads/muskanbararia/Hello-Node/total.svg)](https://GitHub.com/muskanbararia/Hello-Node/releases/)     [![GitHub issues](https://img.shields.io/github/issues/muskanbararia/Hello-Node.svg)](https://GitHub.com/muskanbararia/Hello-Node/issues/)      [![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm) 

# Hello-Node 

A simplied tutorial to understand the basics of NodeJS. Using NodeJS is now as simple as printing "Hello World".

## [Hello-World](hello-node/hello-node.js)

Let's begin with our good old "Hello World" exercise, but this time using NodeJS. But wait, where should we print? How about on your browser?

#### Importing http module
In C, we need ```#include<stdio.h>``` to begin our program. stdio is a library.

In NodeJS, we need  ```require(http)``` to initialize our server. http is a module. We will learn more about modules in future exercises.

Include this code in your first node program to get you started.

 ```
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
```
First, We are importing http module to initialize the server. Afterwards, we are defining the host and the port where we want to see the output.

#### Creating server object

In C, we write our program in ```int main()``` function. 








Basics of NodeJS:

Here I am including all the basic code snippets of all the necessary functions required for simple backend services using NodeJS.

Description::

1. hello-email::

Module dependencies => nodemailer.

Function Description => using smtp to send emails using NodeJS. Email can have text as well as html content. Also, this also demonstrate how to send emails to multiple users in one go.

Changes required => replace 'sender@gmail.com' with your email address, 'password' with your email password, 'reciever@gmail.com' with reciever's email address.

Command to execute on Linux => 
$ npm install nodemailer
$ node hello-email/hello-email.js

2. 
