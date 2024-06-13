// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.

const prompt = require('prompt-sync')()


function inverter_lista(){

    let lista_nomes = []
    let nome_invertido = []

    for ( let i=0; i < 7; i++){
        let nomes = prompt("Insira 7 nomes de pessoas diferentes: ")
        lista_nomes.push(nomes)
    }
    for ( let j=lista_nomes.length - 1;  j >=0 ; j--){
        nome_invertido.push(lista_nomes[j])
    }
    return nome_invertido
}

console.log(inverter_lista())
