const fs = require('fs'); // Import the Node.js file system module

function readFileAsync(filePath, callback) {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      callback(error);
    } else {
      callback(null, data);
    }
  });
}

function displayFileContents(error, data) {
  if (error) {
    console.error("Error reading the file:", error);
  } else {
    console.log("File contents:");
    console.log(data);
  }
}

const filePath = './name.txt';

readFileAsync(filePath, displayFileContents);

console.log("Reading file..."); 
