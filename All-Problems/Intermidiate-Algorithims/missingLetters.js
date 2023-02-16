/*  
Missing Letters
*/

function fearNotLetter(str) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let startingPostion = alphabets.indexOf(str[0]);
    let focusedElement  = alphabets.slice(startingPostion);
    
    for (let i=0; i<str.length; i++){
      if(str[i] !== focusedElement[i]){
            return focusedElement[i]
    }
  }
}
  
 let result =  fearNotLetter("stvwx");
 console.log(result)