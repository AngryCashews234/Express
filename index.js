var http = require("http");
http.createServer(function (request, response) {
      response.writeHead(200, {
         'Content-Type': 'text/plain'
      });

	  var express        =        require("express");
var app            =        express();
app.get('about',function(request,response){
	res.send('about')
});
      response.end();
}).listen(5002);