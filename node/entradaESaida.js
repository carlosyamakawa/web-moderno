//se passar um argumento -a retorno true
const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if (anonimo) {
    process.stdout.write('Oi Anonimo!\n')
    process.exit()
} else { 
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(` Oi ${nome}!\n`)
        process.exit()
    })
}