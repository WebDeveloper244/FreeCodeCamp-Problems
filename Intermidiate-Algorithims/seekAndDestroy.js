/*  
Seek and Destroy
*/

function destroyer(arr) {
    /*  
       const result = Object.values(arguments); 
       convert object into Array object.values() and Array.from()
    */

    const convertArray = Array.from(arguments)
    convertArray.splice(0,1)
    let target = convertArray;

    return arr.filter((num)=> target.indexOf(num) === -1) 
  }
  console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yamcha", "Goku", "Krilin", "Vegita", "hotdog", "grandma", "bugati", "trojan"));