/*  
Missing Letters
*/

function fearNotLetter(str) {
     let createArr = str.split('');
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let startingPostion = alphabets.indexOf(str[0]);
    let focusedElement  = alphabets.slice(startingPostion);
    focusedElement
     createArr.map((ele,i) => {
        console.log(ele, focusedElement[i]);
        if(ele !== focusedElement[i]){
            return focusedElement[i]
        }
     })
    return createArr
  }
  
 let result =  fearNotLetter("abce");

 result