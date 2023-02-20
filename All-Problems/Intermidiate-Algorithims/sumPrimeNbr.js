/*  
Sum All Primes
*/

function sumPrimes(num) {

   function helperFunction(number){
    for (let i=2; i<number; i++){
      if(number % i === 0){return false}
    } return true
  }

  let sum = 0;
  for(let i=2; i<=num; i++){
    if(helperFunction(i)){
       sum += i
    }
  }
  return sum;
  }

  
  let result = sumPrimes(10);

  result;