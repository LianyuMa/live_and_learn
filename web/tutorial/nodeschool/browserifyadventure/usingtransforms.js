const fs = require('fs');
const sprintf = require('sprintf');
const content = fs.readFileSync('wake.txt', 'utf8');
const lines = content.split('\n');

lines.forEach((line, index) => {
  if (index % 5 === 0) {
    console.log(sprintf('%3d %s', index, line));
  } else {
    console.log(`    ${line}`);
  }
});
