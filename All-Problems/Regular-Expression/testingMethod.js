/*  
Testing Method
*/

 // If You find any thing in the string the you can use regex '/ /' 
// find any thing in string use test() method it return true or false;

let myString = "Hello, World!";
let myRegex = /Hello/;
let res =myRegex.test(myString);
res;



/*  
Match a Literal String with Different Possibilities
*/

// you can search multiple possiblities by using or | operator 

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
console.log(petRegex.test(petString));


/*  
Ignore Case While Matching
*/

// you can ignore upper-case and lower-case string using i flag

let newString = "freeCodeCamp";
let fccRegex = /FreeCodeCamp/i; // Change this line
 console.log(fccRegex.test(newString));


/*  
Extract Matches
*/

// you can use match() method to find string it return an array and if case no match then return null

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex);
result;

/*  
Find More Than the First Match
*/

// if you find more then one repeating string then use g flag

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result1 = twinkleStar.match(starRegex);
result1;


/*  
Match Anything with Wildcard Period
*/

// Sometimes you don't need to know the exact characters in your patterns then use wild card (.)

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result2 = unRegex.test(exampleStr);


/*  
Match Single Character with Multiple Possibilities
*/


// Matching Single Character with Multiple Possibilities with '/b[aiu]g'
// get this bag,big,bug

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result3 = quoteSample.match(vowelRegex);
result3;



/*  
Match Letters of the Alphabet
*/

// 
