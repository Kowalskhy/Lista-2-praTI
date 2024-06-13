// 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
// P[1..3,1..5].

function criar_matrizes(){

    let matriz_a = []
    let matriz_b = []

    for( let i=0; i < 3; i++ ){
        let linhas_a = []
        for( let j=0; j < 5; j++ ){
            let n_a = Math.floor(Math.random() * 10 )
            linhas_a.push(n_a)
        }
        matriz_a.push(linhas_a)
    }
    
    for ( let k=0; k < 5; k++ ){
        let linhas_b = []
        for ( let l=0; l < 3; l++ ){
            let n_b = Math.floor(Math.random() * 10 )
            linhas_b.push(n_b)
        }
        matriz_b.push(linhas_b)
    }
    return { matriz_a, matriz_b }
}

let { matriz_a, matriz_b } = criar_matrizes()

console.table(matriz_a)
console.table(matriz_b)

function matriz_produto( matriz_a, matriz_b ){

    let matriz_p = []

    for ( let i=0; i < matriz_a.length; i++ ){
        let linhas_p = []
        for ( let j=0; j < matriz_b[0].length; j++){
            let soma = 0
            for ( let k=0; k < matriz_a[i].length; k++ ){
                soma += matriz_a[i][k] * matriz_b[k][j]
            }
            linhas_p.push(soma)
        }
        matriz_p.push(linhas_p)
    }
    return matriz_p
}

let produto = matriz_produto(matriz_a, matriz_b)

console.table(produto)

