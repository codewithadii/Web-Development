//importing required packages/modules 
const express = require('express');
const app = express();
const port = 2003;
const path = require('path');
const { urlencoded } = require('body-parser');
const fs = require('fs');
const bodyparser = require('body-parser')

//express stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// get stuff
app.get('/', (req,res)=>{
    res.status(200);
    res.render('dance.pug');
});

app.post('/contactus', (req,res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("This item is been saved to database.")
    }).catch(()=>{
        res.status(400).send('Item was not saved to the database.')
    });
});

//listen(or on board/ connecting to surver) stuff
app.listen(port, ()=>{
    console.log(`The application is ready to run at ${port} `);
}); 

// connecting dance website with mongoose 
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/contactdance',{useNewUrlParser: true, useUnifiedTopology: true})

// define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    gender: String,
    phonenumber: String,
    email: String,
    dancestyle: String
});

// modeling the schema
var contact = mongoose.model('contact', contactSchema);
