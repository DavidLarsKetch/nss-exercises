'use strict';

const express = require('express');
const path = require('path');
const server = express();

const paths = [
  "about", "inventory"
];

const pastries = [
  {name: "Croissant", price: '1.50'},
  {name: "Pain du chocolate", price: '2.00'},
  {name: "Baguette", price: '1.75'},
  {name: "Macaron", price: '3.00'},
  {name: "Volkenbrood", price: '1.50'}
];

//view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'pug');

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req, res, next) => {
  res.render('index', {path: req.path, paths});
});

server.get('/about', (req, res, next) => {
  res.render('about', {path: req.path, paths});
});

server.get('/inventory', (req, res, next) => {
  res.render('inventory', {pastries, path: req.path, paths});
});

const port = process.env.PORT || 8080;
server.listen(port, () => {console.log(`Listening on port ${port}`)});
