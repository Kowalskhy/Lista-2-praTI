// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
//     Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
//     valores da sequência.

const prompt = require('prompt-sync')()

function progressao_aritimetica(primeiro_termo, razao_pa){
    
    let pa = []

    if ( isNaN(primeiro_termo) || isNaN(razao_pa) ){
        return "Dado inválido, favor inserir um número"
    }
    
    for ( let i = 0; i < 10; i++){
        
        pa.push(primeiro_termo)
        primeiro_termo *= razao_pa
        
    }
    return pa
}

let primeiro_termo = parseInt(prompt("Insira o primeiro elemento da PA: "))
let razao_pa = parseInt(prompt("Insira a razão da PA: "))
console.log(progressao_aritimetica(primeiro_termo, razao_pa))

//[1,2,4,8,16,32,64,128,256,512]