// vai dar "errado" pois vai pegar de quem chamar o this.nome, não da class
function Pessoa {
    this.nome = nome

    this.falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()