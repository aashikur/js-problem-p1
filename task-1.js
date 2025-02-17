// Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.

function convert_c2f(c){
    let f = (c * 9/5) + 32;
    return f;
}

const celsius = 40;
console.log(convert_c2f(celsius));