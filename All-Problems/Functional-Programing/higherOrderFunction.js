/*  
Use Higher Order Function map,filter,reduce to solve complex problem
*/

const squareList = arr => {
    // Only change code below this line
    return arr.filter((num)=> Number.isInteger(num) && num > 0).map((sqr)=>sqr * sqr)
    // Only change code above this line
  };
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
