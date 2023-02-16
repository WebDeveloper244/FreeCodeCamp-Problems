/*  
DNA Pairing
*/

function calculatePair(init) {
   if(init === 'A'){
    return 'T'
   }else if(init === 'T'){
    return 'A'
   }
   else if(init ==='C'){
    return 'G'
   }
   else if(init ==='G'){
    return 'C';

}
}


function pairElement(str) {
    
    let createArray = str.split('');

    return createArray.map(value => {
        let result = [value,calculatePair(value)];
        return result;
    });
  }
  
  let res = pairElement("GCG");

  res;