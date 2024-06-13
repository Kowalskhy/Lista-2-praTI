// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
//     atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
//     da sequência de Fibonacci.

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

console.log(fibonacci(15))