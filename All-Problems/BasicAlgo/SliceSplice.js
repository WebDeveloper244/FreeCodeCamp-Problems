// ==============>> Slice-Splice <<============== //
function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice()
    newArr.splice(n, 0, ...arr1)
    return newArr
}

console.log(frankenSplice([1, 2], ["a", "b"], 1));