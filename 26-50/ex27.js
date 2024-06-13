// 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
// multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
// um vetor V(36). Escrever o vetor V no final.

const prompt = require('prompt-sync')()

let a = parseInt(prompt("Insira um número inteiro:"))


function matriz6x6 (a) {
    
    let matriz = []

    for ( let i=0; i < 6; i++ ){
        let linhas = []
        for ( let j=0; j < 6; j++ ){
            let n = Math.floor(Math.random() * 99)
            linhas.push(n)
        }
        matriz.push(linhas)
    }
    let matrizXa = []
    
    for ( let i=0; i < matriz.length; i++ ){
        let linhas_matrizP = []
        for ( let j=0; j < matriz[i].length; j++ ){
            let produto = a * matriz[i][j]
            linhas_matrizP.push(produto)
        }
        matrizXa.push(linhas_matrizP)
    }
    return matrizXa

}

let matriz_produto = matriz6x6(a)

function vetor_exibicao(matriz_produto){

    let vetor = []

    for( let i=0; i < matriz_produto.length; i++ ){
        for( let j=0; j < matriz_produto[i].length; j++){
            vetor.push(matriz_produto[i][j])
        }
    }
    return vetor
}

let v = vetor_exibicao(matriz_produto)

console.table(matriz_produto)
console.log(v)

