// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.

const prompt = require('prompt-sync')()

function lista_de_menor(){

    let nome_idade = []
    let menor_idade = []

    for (let i=0; i<9; i++){

        let nome = prompt("Insira o seu nome: ")
        let idade =parseInt(prompt("Insira sua idade: "))
        nome_idade.push([nome, idade])
    }

    for (let j=0; j<nome_idade.length; j++){
        if ( nome_idade[j][1] < 18 ){
            menor_idade.push(nome_idade[j])
        }
    }

    return menor_idade
}

let resultado = lista_de_menor()
console.log("Lista de menores de idade: ")
console.log(resultado)




