'use strict';

const express = require('express');
const fs = require("fs");
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';
const app = express();
// const FOLDER = process.env.DEMOFOLDER || '.';
const FOLDER = '/prometheus';

// print process.argv
process.argv.forEach((val, index, array) => {
  console.log(index + ': ' + val);
});




app.get('/dir/', (req, res) => {
  const files = fs.readdirSync(FOLDER);
  const buf = files.map(f => f);
  res.send(buf.join('<br>'));
});

app.get('/', (req, res) => {
  res.send('Hello world \n');
});


app.listen(PORT, HOST);

console.log(`Running version 3 on http://${HOST}:${PORT}`);
console.log('  cwd:', process.cwd())
console.log(`  FOLDER: ${FOLDER}`);
console.log(`  PORT: ${PORT}`);
console.log(`  ` + fs.readdirSync(FOLDER));




