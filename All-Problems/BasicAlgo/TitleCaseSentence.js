//------------->> Title-Case-Sentene <<-------------//

function titleCase(str) {
    let result = []
    str.toLowerCase()
        .split(" ")
        .forEach(singleWord => {
            let value = ""
            value += singleWord.replace(singleWord[0], singleWord[0].toUpperCase())
            result.push(value)
        })
    return result.join(" ")
}

console.log(titleCase("I'm a little tea pot"));



//------------->> Title-Case-Sentene (Method-2) <<-------------//

function titleCase(str) {
    let result = str.toLowerCase()
        .split(" ")
        .map(singleWord =>
            singleWord.replace(singleWord[0], singleWord[0].toUpperCase())
        ).join(" ")
    return result

}

console.log(titleCase("My name is salman Baloch"));

//------------->> Method 2 is best (👍👍👍👍) <<-------------//

//  Map method is best because it returns a new array so we can use join method directly but if u use forEach loop then it's necessary to initialize 
//  the variable to store value and then u use join method because join method is used to with array