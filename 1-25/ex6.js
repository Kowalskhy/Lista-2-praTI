// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')()

function sorteio( n_tentativa, n_sorteado ){
    if (! n_tentativa ){
        console.log("Informação inválida, favor inserir um numero de 1 à 5!")
    }else if ( n_tentativa === n_sorteado ){
        console.log("Parabéns, você acertou !")
    }else{
        console.log(`Você errou.\nO número sorteado é ${n_sorteado}.`)
    }    
}

let n_sorteado = Math.floor(Math.random() * 6)
let n_tentativa = parseInt(prompt('Tente adivinha o número sorteado entre 1 e 5: '))

sorteio(n_tentativa, n_sorteado)