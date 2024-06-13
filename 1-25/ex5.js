// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require('prompt-sync')()

function JoKenPo(escolha_player){
    
    escolha_pc = escolha_pc[Math.floor(Math.random() * escolha_pc.length)]
    console.log("Escolha do computador: ", escolha_pc)
       
    if ( escolha_pc == escolha_player){
        console.log("Empate!")
    }else if ((escolha_player == 'pedra' && escolha_pc == 'tesoura') ||
              (escolha_player == 'papel' && escolha_pc == 'pedra') ||
              (escolha_player == 'tesoura' && escolha_pc == 'papel')
    ){
        console.log('Você venceu!')
    }else{
        console.log('Você perdeu!')
    }
}

let escolha_player = prompt("Escolha entre ('pedra', 'papel' e 'tesoura'): ")
let escolha_pc = ['pedra', 'papel', 'tesoura']

if (!escolha_pc.includes(escolha_player)){
    console.log("Escolha inválida, favor escolher entre: ('pedra', 'papel' e 'tesoura') ")
}else{
    JoKenPo(escolha_player)
}


