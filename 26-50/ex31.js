// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
// Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
// todos os elementos de V diferentes de A. Mostre os resultados.

const prompt = require('prompt-sync')()

function criar_matriz(){
    
    let m = []

    for ( let i=0; i < 5; i++ ){
        let linhas = []
        for ( let j=0; j < 5; j++ ){
            let n = Math.floor(Math.random() * 9)
            linhas.push(n)
        }
        m.push(linhas)
    }
    return m
}

function busca_elemento(matriz, a){

    let contador = 0
    let nova_matriz = []

    for ( let i=0; i < matriz.length; i++ ){
        let linha = []
        for ( let j=0; j < matriz[i].length; j++ ){
            if ( a === matriz[i][j]){
                contador++
            }else{
                linha.push(matriz[i][j])
            }
        }
        nova_matriz.push(linha)
    }
    return [ contador, nova_matriz]

}
let matriz = criar_matriz()
let a = parseInt(prompt("Insira um numero inteiro: "))
let contador_matriz = busca_elemento(matriz, a)

console.table(matriz)
console.log(contador_matriz[0])
console.table(contador_matriz[1])
