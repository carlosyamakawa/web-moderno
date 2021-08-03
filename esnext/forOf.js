for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = [ 'Map', 'Set', 'Promise']

// in: indices
for (let i in assuntosEcma) {
    console.log(i)
}

// of: valores
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

console.log('-----assuntosMap')
for (let assunto of assuntosMap) {
    console.log(assunto)
}

console.log('-----assuntosMap.keys()')
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

console.log('-----assuntosMap.values()')
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

console.log('-----assuntosMap.entries() [ch, vl]')
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}