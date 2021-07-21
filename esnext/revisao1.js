// let: escopo de bloco
// const
{
    var a = 2
    let b = 3
}
console.log(a)
// console.log(b) // erro pois não faz parte deste bloco

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)
console.log(`${produto} 
é 
caro!`)

// Desctructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] =[1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)