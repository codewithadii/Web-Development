const express = require('express');
const app = express();
const port = 2000;
const path = require('path');
const { urlencoded } = require('body-parser');
const fs = require('fs');

//express stuff
app.use('/static', express.static('static'));
app.use(urlencoded());
app.set('view engine', 'pug'); //set the  tempelate engine as pug
app.set('views', path.join(__dirname, 'views')); // set the view directory


//endpoint get means endpoint ex-'/abc' 
app.get('/', (req,res)=>{
    res.status(200);
    res.render('index.pug');

});

app.post('/', (req,res)=>{
    name= req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    motive = req.body.motive;
    let output = `The name of the client is : ${name}, Client age is : ${age}, Client's gender is : ${gender}, Client address is : ${address}, The motive to join GYM : ${motive}`;
    fs.writeFileSync('output.txt', output);
    const v = {'message' : 'Your form is been submitted successfully'};
    res.status(200);
    res.render('index.pug',v);
    
});

app.listen(port, ()=>{
    console.log(`The app is ready run the localhost at '${port}' `);
});




