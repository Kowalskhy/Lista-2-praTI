// 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.

function m5x5(){ 

    let m = []

    for ( let i =0; i < 5; i++ ){
        let linha_m = []
        for ( let j=0; j < 5; j++ ){
            let n = Math.floor(Math.random() * 9 )
            linha_m.push(n)
        }
        m.push(linha_m)
    }
    return m
}

function somas_matriz(m){

    let somaL_4 = 0
    let somaC_2 = 0
    let somaD = 0
    let soma_total = 0

    for ( let i=0; i < m.length; i++){
        for ( let j=0; j < m[i].length; j++ ){
            soma_total += m[i][j]

            if ( i === 3 ){
                somaL_4 += m[i][j]
            }

            if ( j === 1 ){
                somaC_2 += m[i][j]
            }
            
            if ( i === j ){
                somaD += m[i][j]
            }
        }
    }
    return [ somaL_4, somaC_2, somaD, soma_total]
}
let matriz = m5x5()
console.table(matriz)
console.log(somas_matriz(matriz))