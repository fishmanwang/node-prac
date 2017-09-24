var express = require('express'),
    http = require('http'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/t', function(req, res) {
    for (var i=0; i<10; i++) {
        res.json(i);
    }
});
