// ==============>> Repeate-String <<============== //

function repeatStringNumTimes(str, num) {
    let string = ""
   for(let i=0; i<num; i++){
      string += str
   }
   return string
  }
  let result = repeatStringNumTimes("abc", 3);
  console.log(result)