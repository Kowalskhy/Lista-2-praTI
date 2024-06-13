// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require('prompt-sync')()

function numeros_pares(){

    let vetor = []
    let pares = []
    let n_posicoes = []
    
    for ( let i=0; i < 10; i++){
        let n = parseInt(prompt("Insira 10 numeros inteiros: "))
        vetor.push(n)
    }

    for ( let j=0; j < vetor.length; j++){
        if(vetor[j] % 2 == 0){
            pares.push(vetor[j])
            n_posicoes.push(j)
        }else{
            return `Não constam números pares!`
        }
    }
    return `O vetor original é: [${vetor}]\nOs números pares são: [${pares}]\nSuas posições no vetor original são: [${n_posicoes}]`
    
}

console.log(numeros_pares())