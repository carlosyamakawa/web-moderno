// IIFE => Immediately Invoked Funtion Expression

(function() {
    // foge do escopo global
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')
})()

//escopo global
console.log('Será executado na hora!')
console.log('Foge do escopo mais abrangente')