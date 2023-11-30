const perf = require('execution-time')();

// 1) Sum Zero
    // Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

function addToZero(list){
    let answer = false
    list.forEach((element) => {
        if (-element in list){
            answer = true
        } 
    });
    return answer
}

console.log(`addToZero: ${addToZero([1, 2, 3, -3])}`)


// Leave a code comment with what you believe the runtime of your code to be.
// Runtime Prediction: 40 microseconds 

// First space complexity function
// Extra Credit - List out the space complexity of each solution in Step 2.
perf.start();
addToZero([1, 2, 3, -3])
let resultsaddToZero = perf.stop();   
console.log(`addToZero Runtime Result: `, resultsaddToZero.preciseWords)





// 2) Unique Characters
    // Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(word){
    let check = new Set(word).size === word.length
    return check
}
console.log(`hasUniqueChars: ${hasUniqueChars("horse")}`)


// Leave a code comment with what you believe the runtime of your code to be.
// Runtime Prediction: 20 microseconds 

// Second space complexity function
// Extra Credit - List out the space complexity of each solution in Step 2.

perf.start();
hasUniqueChars("horse")
let resultshasUniqueChars= perf.stop();   
console.log(`hasUniqueChars Runtime Result: `, resultshasUniqueChars.preciseWords)




// 3) Pangram Sentence
    // A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
    // Write a function to check a sentence to see if it is a pangram or not.

function pangramSentence(sentence){
    const replaced = sentence.replace(/[^a-z0-9]/gi, '').toLowerCase();
    // console.log(replaced);
    let check = new Set(replaced).size === 26
    return check
}

console.log(`pangramSentence:  ${pangramSentence('The quick  fox jumps over the lazy dog.')}`)


// Leave a code comment with what you believe the runtime of your code to be.
// Runtime Prediction: 5 microseconds 

// Third space complexity function
// Extra Credit - List out the space complexity of each solution in Step 2.
perf.start();
pangramSentence('The quick  fox jumps over the lazy dog.');
let resultspangramSentence = perf.stop();   
console.log(`pangramSentence Runtime Result: `, resultspangramSentence.preciseWords)





// 4) Longest Word
    // Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function longestWord(list){
    let num = 0
    list.forEach(element => {
        if (element.length > num){
            num = element.length
        }   
    });
    return num
}

console.log(`longestWord: ${longestWord(["hi", "hellojblk", "goat"])}`)

// Leave a code comment with what you believe the runtime of your code to be.
// Runtime Prediction: 1 microseconds 

// Fourth space complexity function
// Extra Credit - List out the space complexity of each solution in Step 2.
perf.start();
longestWord(["hi", "hellojblk", "goat"])
let resultslongestWord = perf.stop();    
console.log(`longestWord Runtime  Result: `, resultslongestWord.preciseWords)

