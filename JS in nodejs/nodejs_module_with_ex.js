const fs = require("fs");
let mod = fs.readFileSync("h.txt", "utf-8");  
// readFileSync("filename.ext","utf-8"); - synchronously read the content of a file
// fs.weiteFileSync()
mod = mod.replace("Hey", "Good Morning");
console.log(mod);

// creating a new file 
// writeFileSync("filename.ext","utf-8"); - synchronously write the content in a file
fs.writeFileSync("hey.txt",mod);
