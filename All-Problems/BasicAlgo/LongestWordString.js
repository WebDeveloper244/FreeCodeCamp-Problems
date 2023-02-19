// ==============>> Find-Longest-Word-in-String <<============== //
function findLongestWordLength(str) {
    let convertArr = str.split(" ")
    let longestWord = ""
    convertArr.forEach(singleElement => {
        if (singleElement.length > longestWord.length) {
            longestWord = singleElement
        }
    })
    return longestWord.length
}
let result = findLongestWordLength("The quick brown fox jumped over the lazy dog")
console.log(result);