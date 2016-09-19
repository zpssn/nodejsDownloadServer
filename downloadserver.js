var http = require('http');
var express = require('express');
var app = express();
app.use("/",express.static(__dirname + '/') );
http.createServer(app).listen('2000',function(){
  console.log("start ok,port:2000");
})
