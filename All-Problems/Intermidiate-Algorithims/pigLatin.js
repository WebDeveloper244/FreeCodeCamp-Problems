/*  
Pig Latin
*/

function translatePigLatin(str) {

    let firstVowels = str.match(/[aeiou]/);
    let firstIndex = str.indexOf(firstVowels);


     if(firstIndex > 0){
        return str.slice(firstIndex)+str.slice(0,firstIndex) + 'ay';
     }
     return str + "way" 

    
}
  
  let result = translatePigLatin("consonant");

  console.log(result);