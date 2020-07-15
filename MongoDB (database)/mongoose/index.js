// connecting with mongo db
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Adityacart', {useNewUrlParser: true, useUnifiedTopology: true});

var db =mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function(){
    console.log('Congratulations You are connected with Mongo database');
})

// creating a schema a layer of mongoose which decide what parameter we are adding in the mongodb
var kittySchema = new mongoose.Schema({
    name: String,
    gender: String 
});

kittySchema.methods.speak = function(){
    var greeting = 'My name is : ' +this.name
    var greeting1 = 'My gender is : ' +this.gender
    console.log(greeting);
    console.log(greeting1);
}

var kitten = mongoose.model('kitten', kittySchema);

var data = new kitten({ name: 'Aditya yadav', gender: 'Male' });
data.speak();

// saving data in database
data.save(function (err,data){
    if(err) return console.error(err);
    data.speak();
})