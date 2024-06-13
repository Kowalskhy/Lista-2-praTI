// 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
// cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
// multiplicações.

function matriz(){

    let m = []
    // Caso queira alterar para uma matriz 50x50 basta alterar o range de i e j para 50
    for ( let i=0; i < 10; i++ ){
        let linha = []
        for ( let j=0; j < 10; j++ ){ 
            let n = Math.floor(Math.random() * 10 )
            linha.push(n)
        }
        m.push(linha)
    }
    return m
}

function multiplicacao(m){

    console.table(m)

    for ( let i=0; i < 10; i++ ){
        let multiplicador = m[i][i]
        for ( let j=0; j < 10; j++ ){
            m[i][j] *= multiplicador
        }
    }
    return m
}

let matriZ = matriz()
let matriz_multiplicada = multiplicacao(matriZ)

console.table(matriz_multiplicada)