let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 //tem precedencia "mais apressada"
console.log(num1)

console.log(++num1 === num2--) // ++ executa antes da comparacao e -- executou depois da comparacao
console.log(num1 === num2)