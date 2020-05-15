const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

//bind "amarra" a função a um objeto, ou seja, o THIS sempre será daquele objeto do bind
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()