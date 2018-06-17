const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const stremio = require('./server/socket');


// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app)
stremio(server);

server.listen(port, () => console.log('Magic happens on localhost:' + port));