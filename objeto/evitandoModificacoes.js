// Object.preventExtensions
// - consegue alterar os atributos existentes (até excluir)
// - não consegue inserir novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'borracha branca escolar'
delete produto.tag
console.log(produto)

// Object.seal
// - consegue alterar os atributos existentes (não exclui)
// - não consegue inserir novos atributos
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze
// - não altera nada