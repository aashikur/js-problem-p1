// Task-3: 
// Write a function to count the number of vowels in a string.

// function countVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     return str.split('').filter(char => vowels.includes(char)).length;
// }

function vowel_string(s){
    const v = 'aeiouAEIOU';
    let cnt = 0;

    for(let i = 0; i<s.length; i++){
        for(let j = 0; j<v.length; j++){
            if(s[i] === v[j]) {
                cnt++;
                break;
            }
        }
    }
    return cnt ;
}

const str = "aeiouAEIOU fghjklm";
console.log(vowel_string(str));

