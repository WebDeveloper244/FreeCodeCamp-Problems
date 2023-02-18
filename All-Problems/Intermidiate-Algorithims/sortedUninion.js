/*  
Sorted Uninion 
*/

function uniteUnique(...arr) {
 let newArr = []
 let createOneArr = arr.flat();
 createOneArr.forEach(ele =>{
    if(newArr.indexOf(ele) === -1) return newArr.push(ele) 
 })
 return newArr
}
  
  let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  
  console.log(result);