// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
// h**-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.


const prompt = require('prompt-sync')()

function limite_vel(velocidade){

    if ( isNaN(velocidade) ){
        return 'Informação inválida, favor inserir um número!'
    }
    
    if ( velocidade > 80){

        const diferenca = velocidade - 80
        const valor_multa = diferenca * 5
        return `O valor da multa a ser pago é de: ${valor_multa}R$`
    }else{
        return 'Dirija com cuidado!'
    }
}

let velocidade = parseInt(prompt("Em qual velocidade estava o veículo(km/h): "))

console.log(limite_vel(velocidade))