// 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
// item:
// a) a soma dos elementos acima da diagonal principal;
// b) a soma dos elementos abaixo da diagonal principal;

function matriz10x10 () {

    let matriz = []

    for ( let i=0; i < 10; i++ ){
        let linhas = []
        for ( let j=0; j < 10; j++ ){
            let n = Math.floor(Math.random() * 9)
            linhas.push(n)
        }
        matriz.push(linhas)
    }
    return matriz
}

let matriz10 = matriz10x10()

function soma_elementos (matriz10) {

    let soma_d_acima = 0
    let soma_d_abaixo = 0

    for ( let i=0; i < matriz10.length; i++ ){
        for ( let j=i + 1; j < matriz10[i].length; j++){
                soma_d_acima +=  matriz10[i][j]
            }    
    }
    for ( let i=0; i < matriz10.length; i++ ){
        for ( let j=0; j < i; j++ ){
            soma_d_abaixo += matriz10[i][j]  
        }
    }
    return [ soma_d_acima, soma_d_abaixo ]

}

console.table(matriz10)
let somas = soma_elementos(matriz10)
console.log(`A soma dos elementos acima da diagonal principal é: ${somas[0]}`)
console.log(`A soma dos elementos abaixo da diagonal principal é: ${somas[1]}`)