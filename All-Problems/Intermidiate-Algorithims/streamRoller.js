/*  
Stream Roller
*/

function steamrollArray(arr) {
    let ans = [].concat(...arr);
   return ans.some(Array.isArray)?steamrollArray(ans):ans;
  }
  
  let result = steamrollArray([1, [2], [3, [[4]]]]);
  console.log(result)