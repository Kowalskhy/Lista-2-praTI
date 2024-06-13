// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

function fibonacci(n){

    let a = 0
    let b = 1
    let resultado = [a,b]

    for ( let i = 2; i < n; i++ ){
        let aux = a + b
        a = b
        b = aux
        resultado.push(b)
    }
    return resultado
    
}

console.log(fibonacci(10))