// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.


const prompt = require('prompt-sync')();

function calcular_qte_cigarro(qte_cigarros, qte_anos){

    while (!( isNaN(qte_cigarros) || isNaN(qte_anos))){
        qte_anos = qte_anos * 365
        qte_cigarros = (qte_cigarros * qte_anos) * 10
        let dias_perdido = parseFloat(Math.round(qte_cigarros/(24 * 60)))
        
        return console.log(`A quantidade de dias peridos é de: ${dias_perdido}`)
    }
    return console.log('Informação inválida, favor inserir um número!')
    
}

let qte_cigarros = parseInt(prompt("Quantidade de cigarros fumado por dia: "))
let qte_anos = parseInt(prompt("Há quantos anos você fuma ?: "))

calcular_qte_cigarro(qte_cigarros,qte_anos)










