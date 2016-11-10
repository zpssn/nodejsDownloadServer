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
//app.use("/",express.static(__dirname + '/') );
http.createServer(app).listen('2000',function(){
  console.log(IPv4 + ":2000");
  console.log('----------local host: '+hostName);
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
