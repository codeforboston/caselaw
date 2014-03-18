'use strict';
var router = module.exports = require('express').Router();
var request = require('request');

router.route('/*').all(function (req, res) {
  request({
    url: 'https://kublai.cloudant.com/cases' + req.path,
    qs: req.query,
    json: true,
    method: req.method,
    body: req.body
  }).pipe(res);
});