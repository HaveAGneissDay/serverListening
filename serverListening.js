var http = require('http');

var PORT = 7000;
var PORTTWO = 7500;

function handleRequest(request, response) {
    response.end("It works!! Path Hit: " + request.url);
}

function handleRequest2 (request, response) {
    response.end("You are the sweetest!" + request.url);
}

var server = http.createServer(handleRequest);
var servertwo = http.createServer(handleRequest2);


server.listen(PORT, function () {
    console.log("Server listening on localhoast:" + PORT);
});

servertwo.listen(PORTTWO, function () {
    console.log("Server listening on localhoast:" + PORTTWO);
});