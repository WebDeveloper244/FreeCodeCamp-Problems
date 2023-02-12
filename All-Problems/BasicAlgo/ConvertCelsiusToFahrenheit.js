
//------------->>Convert-Celsius-to-Fahrenheit<<-------------//

function convertCtoF(Celsius) {
  let Fahrenheit = (Celsius * 9 / 5) + 32
  // ==> convert celsius to fahrenhiet formula celsius*9/5+32 
  console.log(Fahrenheit)
  return Fahrenheit
}
let result = convertCtoF(-30)
console.log(result)
