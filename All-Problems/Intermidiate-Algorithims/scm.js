/*  
Smallest Common Multiple
*/

function computingScm(num1,num2){
    let min = Math.min(num1,num2);
    let max = Math.max(num1,num2);


    for(let m=max; m<= min * max; m+= max){
        if(m % min === 0){
            return m
        }
    }
};
console.log(computingScm(2,10));


function smallestCommons(arr) {
 
    let x = Math.min(...arr)
    let y = Math.max(...arr)
    
    let scm = 1

    for (let i=x; i<=y; i++){
        scm = computingScm(scm, i)
    }

    return scm;
  }
  
 let result =  smallestCommons([1,5]);
 result;