//------------->>Falsy-Bounce<<-------------//
function bouncer(arr) {
    return arr.filter(Boolean)
}
console.log(bouncer([null, NaN, 1, 2, undefined]));

//------------->>(Method-2)<<-------------//
function bouncer(arr) {
    let filterdArray = []
    arr.map(element => {
        if (element) filterdArray.push(element)
    })
    return filterdArray
}
console.log(bouncer([7, "ate", "", false, 9]))