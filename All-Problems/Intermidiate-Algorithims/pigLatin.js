/*  
Pig Latin
*/

function translatePigLatin(str) {

    let vowels = "aeiou".split('');

    for(let i=0; i<str.length; i++){
        let singleValue = str[i];
        if(vowels.indexOf(singleValue) != -1 && i===0){
          return str + "way"
        }
        if(vowels.indexOf(singleValue) != -1){
            return str.slice(i) + str.slice(0,i)+ "ay"
        } 
    }
    return str + "ay";  
}
  
  let result = translatePigLatin("algorithm");

  console.log(result);