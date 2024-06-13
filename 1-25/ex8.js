// 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

const prompt = require('prompt-sync')()

function vida_saudavel(){

    let horas = parseInt(prompt("Insira quantas horas de atividade fisica foi realizada: "))
    let total_pontos
    let valor_recebido
    
    if ( horas <= 10 ){
        total_pontos = horas * 2
    }else if ( horas > 10 && horas <= 20 ){
        total_pontos = horas * 5
    }else{
        total_pontos = horas * 10
    }
    valor_recebido = total_pontos * 0.05

    return `Você conseguiu um total de: ${total_pontos} pontos, o valor a receber é de: R$${valor_recebido.toFixed(2)}`

}

console.log(vida_saudavel())