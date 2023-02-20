/*
Binary Agents  
*/

function binaryAgent1(str) {
    let  Arr1 = str.split(' ');
    let answer=[];
    for(let element of Arr1){
        let convertDecimalCode = parseInt(element,2);
        answer.push(String.fromCharCode(parseInt(element,2)))
    }
    return answer.join('')
  }
  
  let result = binaryAgent1("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


  result;


/*  
 Second Method 
*/

function binaryAgent(str) {
    let  arr = str.split(' ');
    
    let binary =arr.map(ele => parseInt(ele,2));
    // console.log(binary)

   let binary1 = binary.map(ele1 => String.fromCharCode(ele1)).join('')

    return binary1
  }
  
  let result1 = binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");


 console.log(result1); 