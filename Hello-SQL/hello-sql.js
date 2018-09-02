var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: '',
  port: 3308 //Always mention port number
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});