'use strict';
var express = require('express');
var logger = require('morgan');
var compression = require('compression');
var app = express();

app.use(logger('dev'));
app.use(compression());
app.use(require('./middleware/cors'));


app.use(require('./routes/index'));
app.use('/db', require('./routes/db'));
app.listen(7027);