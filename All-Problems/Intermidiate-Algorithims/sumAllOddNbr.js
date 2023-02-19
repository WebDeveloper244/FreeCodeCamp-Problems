/*  
Sum All Odd Fibonacci Numbers
*/

function sumFibs(num) {
    let sum = 0;
    let fib = 1;
    let prevFib = 0;
  
    for (let i = 1; fib <= num; i++) {
      if (fib % 2 === 1) {
        sum += fib;
      }
  
      let temp = fib;
      fib += prevFib;
      prevFib = temp;
    }
  
    return sum;
  }
  
  let result = sumFibs(4);
  result;