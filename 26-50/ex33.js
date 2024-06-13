// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
// elementos da diagonal principal com a média dos elementos da diagonal secundária.

function matriz(){

    let m = []

    for ( let i=0; i < 3; i++ ){
        let linha = []
        for ( let j=0; j < 3; j++ ){
            let n = Math.floor(Math.random() * 10 )
            linha.push(n)
        }
        m.push(linha)
    }
    return m
}

function mult_matriz(m){

    let multiplicador = 1
    let soma = 0

    for ( let i=0; i < 3; i++ ){
        for ( let j=0; j < 3; j++ ){
            if ( i+j === 2 ){
                soma += m[i][j]
            }else if ( i === j ){
                multiplicador *= m[i][j]
            }
        }
    }

    let media = soma / 3 
    let multiplicacao = (media * multiplicador).toFixed(2)

    return multiplicacao
}

let matriz3_3 = matriz()
let result = mult_matriz(matriz3_3)

console.table(matriz3_3)
console.log(`A multiplicaçao da diagonal principal pela média da diagonal secundária é: ${result}`)