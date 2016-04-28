var path = require('path');
var express = require('express');
var httpProxy = require("http-proxy");
var proxy = require('express-http-proxy');

var app = express();
var apiProxy = httpProxy.createProxyServer();

var isDev = process.env.NODE_ENV !== 'production';

// Load static resources
app.use(express.static(path.join(__dirname,'public')));

// If in development
if (isDev) {
  var webpack = require('webpack');
  var webpackMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var config = require('./webpack.dev.js');

  var compiler = webpack(config);
  var middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    quiet: false,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    stats: {
      colors: true,
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  // proxy section

  app.use('/getCurrentTime', proxy('date.jsontest.com', {
    forwardPath: function(req, res) {
      return require('url').parse(req.url).path;
    }
  }));


  app.use('/getAllImages', proxy('localhost:8085', {
    forwardPath: function(req, res) {
      return require('url').parse(req.baseUrl).path;
    }
    // ,
    // decorateRequest: function(req) {
    //   req.path = '/getAllImages';
    //   return req;
    // }
  }));
} else {
  app.use(express.static(path.join(__dirname, 'dist')));
}

// Fallback to index.html for all other requests
app.get('*', function(req,res){
  console.log('index.html')
  res.sendFile(__dirname + '/public/index.html');
});

var port = isDev ? 8088 : process.env.PORT;

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) console.log(err);
  console.info('Listening on port ' + port);
});
