/*  
Missing Letters
*/

function fearNotLetter(str) {
    let createArr = str.split('');
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let startingPostion = alphabets.indexOf(str[0]);
    let focusedElement  = alphabets.slice(startingPostion);
    let res = createArr.map((ele,i) => {
        if(ele !== focusedElement[i]){
            return focusedElement[i]
        }
     }).join('')

    return res
  }
  
 let result =  fearNotLetter("abce");

 result;