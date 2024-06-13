// 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

function gerar_vetor(vetor_aleatorio){

    for ( let i = 0; i < 20; i++){
        vetor = Math.floor(Math.random() * 100 )
        vetor_aleatorio.push(vetor)
    }
    return vetor_aleatorio
}

function inverter_vetor(vetor_aleatorio){
    
    vetor_aleatorio.sort(function(a,b){
        return a-b
    })
    return vetor_aleatorio

}
let vetor_aleatorio = []

console.log(`O vetor gerado é: [${gerar_vetor(vetor_aleatorio)}]\nEm ordem crescente: [${inverter_vetor(vetor_aleatorio)}]`)