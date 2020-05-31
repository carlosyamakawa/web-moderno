// pessoa -> 123 -> {...}
const pessoa = {
    nome: 'João'
}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
/*
pessoa = {
    nome: 'Ana'
}
*/

Object.freeze(pessoa)
pessoa.nome = 'Maria' //não vai mudar pois está congelado
console.log(pessoa)