 const http = require('http')
 const fs  = require('fs')
 const fileContent = fs.readFileSync('GravityFitness.html')

 const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(fileContent)
 })

 server.listen(1027, '127.0.0.1', ()=>{
     console.log("Listining to port 1027")
 })