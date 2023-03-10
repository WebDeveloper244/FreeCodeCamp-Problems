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

// Inside a character set, you can define a range of characters to match using a hyphen character: -

let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result4 = quoteSample1.match(alphabetRegex);
result4


/*  
Match Numbers and Letters of the Alphabet
*/

// // Inside a character set, you can define a range of characters and Numbers to match using a hyphen character: -

let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi; // Change this line
let result5 = quoteSample2.match(myRegex1);


/*  
Match Single Characters Not Specified
*/

// with ^ char...

let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiou0-9]/gi; // Change this line
let result6 = quoteSample3.match(myRegex2);
console.log(result6);


/*  
Match Characters that Occur One or More Times with + chr
*/


let difficultSpelling = "Mississippi";
let myRegex3 = /s+/g; // Change this line
let result7 = difficultSpelling.match(myRegex3);
result7;


/*  
Match Characters that Occur Zero or More Times
*/


// Only change code below this line
let chewieQuote =  'Aaaaaaaaaaaaaaaarrrgh!'
let chewieRegex = /Aa*/g; // Change this line
// Only change code above this line

let result8 = chewieQuote.match(chewieRegex);

result8;


/*  
Find Characters with Lazy Matching with ? chr
*/

// if you add ?i then it find 'titanic' to 'ti' coz it lazy


let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/; // Change this line
let result9 = text.match(myRegex4);
result9;


/*  
you can search the patterns use caret ^ outside the character
*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let res2 = calRegex.test(rickyAndCal);
res2;


/*  
Match Ending String Patterns with $
*/

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let res3 = lastRegex.test(caboose);
res3;


/*  
Match All Letters and Numbers \w
*/

// he closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. 

let str = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let res4 = quoteSample.match(alphabetRegexV2).length;
res4;


/*  
Match Everything But Letters and Numbers \W
*/

// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].


let str1 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let res5 = quoteSample.match(nonAlphabetRegex).length;
res5;


/*  
Match All Numbers \d
*/

// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let res6 = movieName.match(numRegex).length;
res6;


/*  
Match All Non-Numbers \D
*/

// The shortcut to look for non-digit characters is \D. This is equal to the character   class [^0-9].

let movie = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let res7 = movie.match(noNumRegex).length;
res7;

/*  
Matching White Space Letter
*/



