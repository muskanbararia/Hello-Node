var fs = require('fs');
var rs = fs.createReadStream('./one.txt');
rs.on('open', function () {
  console.log('The file is open');
});