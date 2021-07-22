// ESB: Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// melhorias na notação literal
const nome = 'Carlos'
const pessoa = {
    nome, //cria o parametro nome e usa a variavel nome acima
    ola() {
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())