// Task-5: 
// Generate a random number between 10 to 20.


function random(){

    let random = Math.random();    
    random = random * 10+10;
    random = parseInt(random);
    return random;
}


console.log(random());
