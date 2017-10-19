var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello world\n');
}).listen(8888);


var http=require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'content-Type':'text:plain'});
    response.end('Hello World\n');
}).listen(8888);
var http=require('http');
http.createServer(function(requist,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end();
}).listen(8888)