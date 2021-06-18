const fs = require("fs");

// print process.argv
process.argv.forEach((val, index, array) => {
    console.log(index + ': ' + val);
});

const folder = process.argv.length > 2 ? process.argv[2] : '.';

fs.readdirSync(folder).forEach(file => {
    console.log(file);
});