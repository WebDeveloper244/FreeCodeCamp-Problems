/*  
Search and Replace 
*/

function myReplace(str,before,after){
  
    if(before[0] === before[0].toUpperCase()){
        after = after[0].toUpperCase() + after.slice(1)
    }
    if(before[0] === before[0].toLowerCase()){
        after = after[0].toLowerCase() + after.slice(1)
    }

    return str.replace(before,after)

}

let res = myReplace("Let us go to the Store", "Store", "mall");

res;