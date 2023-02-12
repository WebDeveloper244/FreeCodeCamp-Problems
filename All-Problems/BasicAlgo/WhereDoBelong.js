// ==============>> 🚗 Where-Do-I-Belong 🚗 <<============== //

function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
