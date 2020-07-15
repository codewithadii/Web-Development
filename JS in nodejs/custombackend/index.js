const http = require('http');
const fs = require('fs');
const home = fs.readFileSync('./home.html');
const AboutUs = fs.readFileSync('./AboutUs.html');
const Contact = fs.readFileSync('./Contact.html');
const Services = fs.readFileSync('./Services.html');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type' , 'text/html');
    console.log(req.url);
    url = req.url;
    if(url =='/home'){
        res.end(home);
    }
    else if(url == '/AboutUs'){
        res.end(AboutUs);
    }
    else if(url == '/Contact'){
        res.end(Contact);
    }
    else if(url == '/Services' ){
        res.end(Services);
    }
    else{
        res.statusCode = 200;
        res.end('<h1>404 error not found</h1>')
    }
});

server.listen(3000, '127.0.0.1', ()=>{
    console.log("Listning to port 3000");
});