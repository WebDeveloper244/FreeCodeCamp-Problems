/*  
 Wherefore art thou
*/

function whatIsInAName(collection, source) {
try {
    let convertArr = Object.keys(source);

    return collection.filter(obj =>{
        for(let key of convertArr){

            console.log(obj[key]);
            console.log(source[key]);

           if(!obj.hasOwnProperty(key) || obj[key] != source[key]){
            return false
           }
           return true
        }
    })
    
} catch (error) {
    console.log(error);
}
}

let result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

result;