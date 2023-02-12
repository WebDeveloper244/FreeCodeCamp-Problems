// ==============>> Return-Largest-Number-in-Array <<============== //

function largestOfFour(arr) {
    let greaterValue = []
    arr.forEach(singleArray => {
        console.log(singleArray)
        let largestNumber = -Infinity
        singleArray.forEach((singleWord) => {
            if (singleWord > largestNumber) {
                largestNumber = singleWord
            }
        })
        greaterValue.push(largestNumber)
    })
    return greaterValue
}

let result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(result)
