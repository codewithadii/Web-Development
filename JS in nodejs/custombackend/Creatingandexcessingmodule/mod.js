// console.log("This is mod");

function sum(a,b){
    let sum = 0;
    sum = a+b;
    console.log("The Sum of "+a+" and "+b+" is : ");
    return sum;
}

module.exports = {
    sum: sum,
    name: 'Aditya Yadav',
    course: 'Btech'
}