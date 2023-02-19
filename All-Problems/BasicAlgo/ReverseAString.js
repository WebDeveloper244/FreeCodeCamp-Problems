// ==============>> Reverse-A-String <<============== //
function reverseString(str) {
    let result = []
    let convertArr = str.split("")
    let reverseArr = convertArr.reverse()
    reverseArr.forEach(element => {
        result.push(element)
    })
    return result.join("");
}
const result = reverseString("hello")
console.log(result);

// ==============>> Second-Method <<============== //

function reverseStringMethod2(str) {
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        let individualReverseElement = str[i]
        reverseString += individualReverseElement
    }
    return reverseString
}
const value = reverseStringMethod2("hello")
console.log(value);