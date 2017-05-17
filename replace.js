var http = require('http');
var express = require('express');
var routes = require('./routes/index');
var app = express();
var os = require('os');
var fs = require('fs');
var file = fs.readFileSync("index.html", "utf8");
for(i=0;i<file.length;i++){
  file=file.replace("hhahah","beson");
}
fs.writeFile("index.html",file, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
