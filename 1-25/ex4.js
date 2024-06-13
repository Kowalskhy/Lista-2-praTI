// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')()

function triangulo(lado1, lado2, lado3){
    
    if ( (lado1 + lado2) > lado3 && (lado1 + lado3) > lado2 && (lado2 + lado3) > lado1 ){
        
        return console.log("É possível formar um triângulo!")
    }else{
        return console.log ("Não é possível formar um triângulo!")
    }
}

let seg1 = parseInt(prompt("Insira o valor do primeiro lado: "))
let seg2 = parseInt(prompt("Insira o valor do segundo lado: "))
let seg3 = parseInt(prompt("Insira o valor do terceiro lado: "))

triangulo(seg1, seg2, seg3)