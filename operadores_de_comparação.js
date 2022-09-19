/**
 * operadores de comparação 
 */

// verdadeiro (true) ou falso (false)

//igualdade
const msg = 'Eu sou uma mensagem'
const msg2 = "Eu sou outra mensagem"
// "=" serve para fazer atribuição de valores
console.log(msg == msg2) // == sinal de comparação *false

const num = 5
const num2 = 5

console.log(num == num2) //true

let a = 78 //numérico number
let b = '78' // texto string 

console.log(a == b) // true

// idênticos ===
console.log(a === b) //false

// diferença !=
console.log(msg != msg2) //true
console.log(a != b) //false
console.log(a !== b) //compara se o valor e o tipo de a é diferente do valor e do tipo de b.

a = 56
b = 30
let c = 500
let d = 500

console.log(a > b) //true
console.log(c >= d) //true
console.log(3 > 6) //false
console.log(7.5 < 7.5) //false
console.log(8 <= 8) //true