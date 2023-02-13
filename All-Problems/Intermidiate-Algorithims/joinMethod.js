/*  
combine an Array into a String Using the Join Method
*/

function sentensify(str) {
    // Only change code below this line
     
    return   str.split(/\W/).join(' ')
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));