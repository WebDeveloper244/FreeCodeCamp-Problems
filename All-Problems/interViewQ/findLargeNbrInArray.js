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


/*
Merge two sorted array in Acending Order and remove duplicate order
*/

let array1 = ['A','B','D','C','F'];
let array2 = ['A','E','G','H','B'];

let array3 = [...array1,...array2];

array3.sort();
array3



let uniqueChars = [... new Set(array3)]
console.log(uniqueChars);


/*  
Optional Chaninig ?
*/ 

/*  
Optional chaning is a feature that allows you to access the property of of objects and element of an array without having to check whether the object and array is null and undefined and represente by ?
*/

let person = {
    name:'salman',
    class:'2nd year',
    carCollection : {
        name1:'lamborghini',
        name2:'GTR Nissan',
        name3:'Supra'
    }
}

console.log(person.carCollection.name1);
// console.log(person2?.carCollection?.name1);

/* 
Find the Average using reduce method
*/

let newArr = [8,8,8,8,4];

let res = newArr.reduce((acum,nbr,index,arr)=>{
  
   let result = acum+nbr/arr.length
   return result

},0)

console.log(res);
