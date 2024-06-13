// 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
// variável identificadora que calcule a operação conforme a informação contida nesta
// variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.

const prompt = require('prompt-sync')()

function vetor(){

    let vetor = []

    for ( let i=0; i < 6; i++ ){
        let n = Math.floor(Math.random() * 10)
        vetor.push(n)
    }
    return vetor
}

function soma_elementos(v){
    
    let soma = 0
    for ( let i=0; i < v.length; i++ ){
        soma += v[i]
    }
    return soma
}

function produto_elementos(v){

    let produto = 1
    for ( let i=0; i < v.length; i++ ){
        produto *= v[i]
    }
    return produto
}

function media_elementos(v){

    let soma = soma_elementos(v)
    let media = soma / 6
    return media 
}

function ordernar(v){

    return v.slice().sort((a,b) => a-b)

}
let v = vetor()
console.log(`Vetor [${v}]`)

let operacao = parseInt(prompt("Insira a operação desejada ( 1 - 5 ):"))

switch (operacao) {
    case 1:
        console.log("Soma dos elementos:", soma_elementos(v));
        break;
    case 2:
        console.log("Produto dos elementos:", produto_elementos(v));
        break;
    case 3:
        console.log("Média dos elementos:", media_elementos(v));
        break;
    case 4:
        console.log("Elementos ordenados:", ordernar(v));
        break;
    case 5:
        console.log("Vetor:", v);
        break;
    default:
        console.log("Operação inválida.");
}

