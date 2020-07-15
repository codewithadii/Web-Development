// Synchronous or blocking
// -line by line execution


// Asynchronous or non blocking
// line by line execution not gaurented
// -callback will fire

const fs = require("fs");
let mod = fs.readFile("hey.txt","utf-8", (err,data)=>{
    console.log(data);
});
console.log("This is a message hey");

