// Task-2: 
// You are given an array of numbers. Count how many times a number is repeated in the array. 

// sample-input: 
// numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2

// sample-input: 
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

function count_repeat(array,find){
    let cnt = 0;
    for(const i of array){
         if(i===find) cnt++;
    }
    return cnt;
}

const numbers = [5,6,11,12,98, 5]

console.log(count_repeat(numbers,5));
console.log(count_repeat(numbers,2));
