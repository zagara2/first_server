// Here we require/import the HTTP module. built into node, so we don't need npm install
var http = require("http");

// Here we define a port to listen on
var PORT = 7000;

var port2 = 7500;

// Here we create a generic function to handle requests and responses
function handleRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  //%s just means "substitute here what you put after comma" or something
  console.log("you're cool I suppose");

});

server.listen(port2, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  //%s just means "substitute here what you put after comma" or something
  console.log("i don't like ya");

});