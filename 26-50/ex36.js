// 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
// um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
// do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
// número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
// o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
// mensagem "Parabéns, tu foi o GANHADOR".


function loteria(){

    let gabarito = []

    for ( let i=0; i < 13; i++ ){
        let n_gabarito = parseInt(Math.floor(Math.random() * 10))
    gabarito.push(n_gabarito)
    }
    return gabarito
}


function jogador(){
    
    let apostador = []
    
    for ( let i=0; i < 13; i++ ){
        let n_apostador = parseInt(Math.floor(Math.random() * 10))
        apostador.push(n_apostador)
        }
    return apostador
}
        
function n_jogadores(resposta, qte_jogadores){

    for ( let j=1; j < qte_jogadores; j++ ){
        let jogadores = jogador()
        let acertos = 0

        for ( let i=0; i < resposta.length; i++ ){
            if ( resposta[i] === jogadores[i] ){
                acertos ++
            }
        }

        console.log(`Jogador número: ${j}`)
        console.log(`Numeros jogados: ${jogadores}`)
        console.log(`Numeros de acertos: ${acertos}`)
        if ( acertos === 13 ){
            console.log(`Parabén, tu foi o GANHADOR!`)
        }
        console.log('-------------------------------------------')
    }

    
}        
        
let resposta = loteria()
console.log(`Numeros sorteados: ${resposta}`)
console.log('--------------------------------')

n_jogadores(resposta, 100)

