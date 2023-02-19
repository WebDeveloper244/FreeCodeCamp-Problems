/*  
Find Largest and Smallest Number in Array
*/

let arr1 = [32,67,8,1,9,87];

function minimumNbr(arr1){ 
   return arr1.reduce((mini,nbr)=> Math.min(mini,nbr))
}
console.log(minimumNbr(arr1));



let arr = [32, 67, 8, 1, 9, 87];
let largestNum = Math.max(...arr);
console.log(largestNum);