// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require('prompt-sync')()

// let carros = {
//     'Luxo': {
//         'aluguel': 150,
//         'km': function(km){
//             return km <= 200 ? 0.30 * km : 0.25 * km
//         }
//     },
//     'Popular': {
//         'aluguel': 90,
//         'km': function(km){
//             return km <= 100 ? 0.20 * km : 0.10 * km
//         }
//     }
// }
// function preco_pagar(carro, dias, km) {
    
//     const tipo_carro = carros[carro]
    
//     if (tipo_carro) {
//         const preco_aluguel = tipo_carro.aluguel * dias
//         const preco_km = tipo_carro.km(km)
//         const preco_total = preco_aluguel + preco_km
        
//         console.log(`O preço total a ser pago é de: ${preco_total.toFixed(2)}R$`)
//     } else {
//         console.log("Informação invávlida, favor inserir (Luxo ou Popular)!")
//     }

// }

function cobrar_aluguel(){

    let carro = prompt("Qual o tipo de carro alugado (Luxo ou Popular): ")
    let dias = parseInt(prompt("Por quantos dias o carro foi alugado: "))
    let km = parseFloat(prompt("Quantos km fora rodados: "))
    
    let preco_dia
    let preco_km

    if (carro == 'Luxo'){

        preco_km = km <= 200 ? 0.30 * km : 0.25 * km
        preco_dia = 150

    }else if (carro == 'Popular'){

        preco_km = km <= 100 ? 0.20 * km : 0.10 * km
        preco_dia = 90

    }else{
        return 'Tipo de carro inválido, favor inserir ( Luxo ou Popular)'
    }

    const preco_total = (preco_dia * dias) + preco_km
    return `O preço tptal a ser pago é de: ${preco_total.toFixed(2)}R$`
}

console.log(cobrar_aluguel())



