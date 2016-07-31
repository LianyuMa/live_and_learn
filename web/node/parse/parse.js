const fs = require('fs');
const atob = require('atob');

fs.readFile('test_msg.txt', function(err, data) {
  if (err) {
    return console.error(err);
  }

  let subjectLine = data.toString().match(/Subject:\s[\s\S]*==\?=/g);
  // for this case only 1 Subject line
  let selectedString = subjectLine[0].replace(/=\?UTF-8\?B\?/g, '').replace(/\?=/g, '').replace(/==/g, '').replace(/Subject:\s/, '');
  let parsedString = atob(selectedString);
  console.log(`Subject: ${parsedString}`);
});
