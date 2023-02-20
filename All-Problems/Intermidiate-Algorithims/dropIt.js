/*  
Drop It 
*/

function dropElements(arr, func) {
   let newArr = [];
   for(let i=0; i<arr.length; i++){
    if(func(arr[i])) { arr.slice(i)}
   } 
    return arr;
  }
  
  let result = dropElements([1, 2, 3], function(n) {return n < 3; });
  result