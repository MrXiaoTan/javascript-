var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>node.js</h1>');
    res.end('<p>Hello node</p>');
}).listen(3000);

    console.log("aaa");