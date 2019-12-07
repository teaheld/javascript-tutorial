var http = require('http');
var fs = require('fs'); // File System

http.createServer(function (req, res) {
    fs.readFile('data/1.html', function(err, data) {
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.write(data);
       res.end();
    });
}).listen(8080);
