// vai dar "errado" pois vai pegar de quem chamar o this.nome, não da class
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


// aqui vai dar certo devido o contexto lexico
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${ nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()