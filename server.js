const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// Api for connecting to mongo
const api = require('./server/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Api location
app.use('/api', api);

// Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app)

server.listen(port, () => console.log('Magic happens on localhost:' + port));