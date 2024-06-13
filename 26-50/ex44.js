// 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
// objeto e retorne esse número.

function propriedade_string(objeto){

    let n = 0

    for ( let i in objeto ){
        if ( typeof objeto[i] === 'string' ){
            n++
        }
    }
    return n
}

let objeto = {
    a: true,
    b: 'A',
    c: 2,
    d: 'B'
}

let contador = propriedade_string(objeto)
console.log(contador)