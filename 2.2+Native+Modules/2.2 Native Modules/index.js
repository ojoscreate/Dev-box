//fs to
let fs = require("fs");

// To write file

// fs.writeFile("output.txt", "hello, Welcome to node js", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

// To read the file it done in two ways
// 1. Synchronous way
// let data = fs.readFileSync("output.txt", "utf8");
// console.log("file content:", data.toString());

// 2. Asynchronous way
fs.readFile("output.txt", "utf8", (err, data) => {
  if (err) throw err;
  //   without utf8 it shows buffer data but can be converted to string using toString() method
  console.log("file content:", data.toString());
});
