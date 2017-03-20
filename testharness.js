var express = require('express');
var Client = require('oc-client');

var app = express();

var client = new Client({
  registries: {
    serverRendering: 'http://localhost:3000/'
  }
});

app.get('/', function (req, res) {
  client.renderComponents([
  	{ name: 'client-side-render-with-external-deps' }, 
  	{ name: 'oc-client' }
  ], {}, function (err, htmls) {
    console.log(htmls.join(''));
    res.send(htmls.join(''));
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});