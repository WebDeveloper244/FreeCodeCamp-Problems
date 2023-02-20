/*  
Every thing be true
*/

function truthCheck(collection, pre) {
  return  collection.every(ele=>{
    console.log(ele[pre]);
      return  ele[pre]
    })
  }
  
 let result = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

 result