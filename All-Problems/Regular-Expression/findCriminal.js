/*  
Find One or More Criminals in a Hunt
*/

let str = 'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3';
let myRegex = /[^D-Z0-9]C*/;
let result = str.match(myRegex)
result;