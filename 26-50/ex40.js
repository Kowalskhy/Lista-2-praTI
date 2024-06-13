// 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
// resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
// cada), representando as apostas feitas. Compare os números das apostas com o
// resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
// corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
// e quadras, apenas por quinas.)

function vetor(){

    let vetor1 = []
    for ( let i=0; i < 5; i++ ){
        let n = parseInt(Math.floor(Math.random() * 60 ))
        vetor1.push(n)
    }
    return vetor1
}

let resultado_loto = vetor()
console.log(`Números sorteados: [${resultado_loto}]`)
console.log('----------------------------------------')

for ( let i=0; i < 50; i++ ){
    let apostadores = vetor()
    let ganhador = true

    for ( let j=0; j < 5; j++ ){
        if ( apostadores[j] !== resultado_loto[j] ){
            ganhador = false
            break
        }
    }

    if ( ganhador ){
        console.log(`Apostador de nº${i + 1}: GANHADOR!!!`)
        console.log('----------------------------------------')
    }else{
        console.log(`Apostador de nº${i + 1}: Não ganhou!`)
        console.log('----------------------------------------')
    }

    console.log("Aposta:", apostadores)
    console.log('----------------------------------------')
}
