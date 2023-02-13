/*
Diff Two Arrays
*/
function diffArray(arr1, arr2) {
    let newArr = [];

   let Array = (first,second)=>{
     
    first.forEach((number)=>{
        if(second.indexOf(number) === -1 ){
           newArr.push(number)
        }
        
    })  
   }
  let Arr1 =  Array(arr1,arr2);
  let Arr2 = Array(arr2,arr1);

    return newArr
    
   
  }
  
  console.log(diffArray([1, 2, 7, 5], [1, 2, 3, 4, 5]));