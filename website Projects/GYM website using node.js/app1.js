const express = require('express');
const app = express();
const port = 2002;
const path = require('path');
const { urlencoded } = require('body-parser');
const fs = require('fs');
//express stuff

app.use('/websitecode', express.static('websitecode')); //set the templete as engine pug
app.use(urlencoded());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res)=>{
    res.status(200),
    res.render('gym.pug');
});

app.post('/',(req,res)=>{
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    motive = req.body.motive;
    let output = `The name of the client is : ${name} , Client's age is : ${age} , 
    Client's gender is : ${gender} , Client's address is : ${address} , Motive to join Gym is : ${motive}`;
    fs.writeFileSync('Output.txt', output); 
    res.status(200);
    const v = {'message' : 'Your Form is Submitted successfully.'}
    res.render('gym.pug',v);
});

app.listen(port, ()=>{
    console.log(`The application is ready at : ${port} `);
});