var http = require('http');
var express = require('express');
var routes = require('./routes/index');
var app = express();
var os = require('os');
var IPv4,hostName;
hostName=os.hostname();
for(var i=0;i<os.networkInterfaces().en0.length;i++){   //en0 is your Network Interface Card, be careful ,use ifconfig to see what is your Network Interface Card and change
    if(os.networkInterfaces().en0[i].family=='IPv4'){
        IPv4=os.networkInterfaces().en0[i].address;
    }
}
app.use('/', routes);
app.use("/",express.static(__dirname + '/') );   //__dirname 为根目录的意思，后面加根目录下的绝对路径
// app.use("/",express.static('../../Downloads') );    //绝对路径下
http.createServer(app).listen('2000',function(){
  console.log(IPv4 + ":2000");
  console.log('----------local host: '+hostName);
})
