/*  
Spinal Tap Case
*/

function spinalCase(str) {
   
  let camelCase = str.replace(/([a-z])([A-Z])/g, '$1 $2');
camelCase
  let handleCase = camelCase.replace(/\s|_/g, '-').toLowerCase();

  return handleCase

  }
  
  let result = spinalCase('thisIsSpinalTap');

  result;