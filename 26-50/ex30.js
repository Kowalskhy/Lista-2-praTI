// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.

function m () {

    let m5x5 =[]

    for ( let i=0; i < 5; i++ ){
        let linha = []
        for ( let j=0; j < 5; j++ ){
            let n = Math.floor(Math.random() * 9)
            linha.push(n)
        }
        m5x5.push(linha)
    }
    return m5x5
}

function vetores_soma (matriz){
    
    let sl = []
    let sc = []

    for ( let i=0; i < matriz.length; i++ ){
        sl.push(0)
        sc.push(0)
    }

    for ( let i=0; i < matriz.length; i++ ){
        for ( let j=0; j < matriz[i].length; j++ ){
            sl[i] += matriz[i][j]
            sc[j] += matriz[i][j]
        }
    }

    return [ sl, sc ]


}

let matriz = m()
let vetores = vetores_soma(matriz)
console.table(matriz)
console.log(`A soma das linhas da matriz é: [${vetores[0]}]`)
console.log(`A soma das colunas da matriz é: [${vetores[1]}]`)
