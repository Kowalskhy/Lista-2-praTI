// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

const prompt = require('prompt-sync')()


function matriz_aleatoria (matriz) {
    
    let vetor = []
    
    for ( let i=0; i < 6; i++){
        let linha = []
        for ( let j=0; j < 8; j++){
            let numero = Math.floor(Math.random() * 199) - 99
            linha.push(numero)
        }
        matriz.push(linha)
    }
    
    for ( let i=0; i < matriz.length; i++ ){
        let n = 0
        for ( let j=0; j < matriz[i].length; j++){
            if ( matriz[i][j] < 0 ){
                n++
            }
        }
        vetor.push(n)
    }
    console.log("Quantidade de elementos negativos em cada linha:", vetor)
    return matriz
}   

let matriz = []
let resultado = matriz_aleatoria(matriz)

for ( let i=0; i < resultado.length; i++){
    console.log(`[${resultado[i].join(" ")}]`)
}
