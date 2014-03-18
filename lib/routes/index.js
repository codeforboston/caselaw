'use strict';
var app = module.exports = require('express')();

app.get('/', function (req, res) {
  res.jsonp({hello: 'there'});
});