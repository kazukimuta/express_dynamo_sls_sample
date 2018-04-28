'use strict';

if (!global._babelPolyfill) {
  require('babel-polyfill');
}

const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

require('./config/dynamoDB');

const userController = require('./controllers/user');

app.use(bodyParser.json({ strict: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});
app.get('/hoge', (req, res) => {
  res.json({ message: 'Hello Hoge!' });
});

app.get('/users/:userId', userController.getUser);
app.post('/users', userController.createUser);

module.exports.main = serverless(app);