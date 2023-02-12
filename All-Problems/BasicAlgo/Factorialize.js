const factorialize = (num)=>{
    let multiplyNumber = 1;
    for(let i=1; i<=num; i++){
        let res = i*multiplyNumber
        multiplyNumber = res
    }
    return multiplyNumber
}
let response = factorialize(5)
response;








  