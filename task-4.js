// Task-4: 
// Write a function to find the longest word in a given string.

// sample-input: 
// I am learning Programming to become a programmer

// sample-output: Programming


function longestWord(s){
    const array = s.split(' ');
    let longestWord = '';


    for(const word of array){
        if(longestWord.length < word.length){
            longestWord = word;
        }
    }

    return longestWord;
}


const str = "bangladesh is Big country of the world hahaha!";
console.log(longestWord(str));