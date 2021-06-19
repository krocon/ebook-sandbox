'use strict';

const express = require('express');
const fs = require("fs");
const PORT = 5000;
const HOST = '0.0.0.0';
const app = express();

// print process.argv
process.argv.forEach((val, index, array) => {
  console.log(index + ': ' + val);
});

const folder = process.argv.length > 2 ? process.argv[2] : '.';

app.get('/dir/', (req, res) => {
  const files = fs.readdirSync(folder);
  const buf = files.map(f => f);
  res.send(buf.join('<br>'));
});

app.get('/', (req, res) => {
  res.send('Hello world \n');
});


app.listen(PORT, HOST);

console.log(`Running version 3 on http://${HOST}:${PORT}`);









