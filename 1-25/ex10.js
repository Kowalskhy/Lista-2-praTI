// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require('prompt-sync')()

function analise_numeros(){

    let n_menor = Infinity
    let n_somatorio = 0
    let contador = 0
    let contador_par = 0
    let n

    do{
        n = prompt("Insira um numero ou digite 'Parar' para encerrar: ")

        if ( n == "Parar" ){
            break
        }

        n = Number(n)

        if ( isNaN(n)){
            console.log("Por favor, insira um número válido.")
            continue
        }

        if ( n < n_menor ){
            n_menor = n
        }
        if (n % 2 == 0 ){
            contador_par ++
        }

        contador ++
        n_somatorio += n
    }while(true)

    let media = n_somatorio / contador
    return { somatorio: n_somatorio, menor: n_menor, media: media, pares: contador_par}
}

let numeros = analise_numeros()

console.log(`A somatoria entre todos os valores inseridos é de: ${numeros.somatorio}\n
            O menor número de todos os valores inseridos é: ${numeros.menor}\n
            A média dos valores é de: ${numeros.media}\n
            A quantidade de numeros pares é de : ${numeros.pares}`)