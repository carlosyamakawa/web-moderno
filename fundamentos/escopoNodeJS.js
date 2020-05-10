let a = 3

globalThis.b = 123
this.c = 456
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this) // nodeJS
console.log(module.exports)

// module.exports = { c: 456, e: 'teste' }
// a e b não estão no module.exports