// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

const prompt = require('prompt-sync')()


function total_salario_sexo(){
    let salario_totalM = 0
    let salario_totalF = 0

    do {

        let sexo = prompt("Homem ou Mulher : ")
        let salario = parseInt(prompt("Qual o salário recebido: "))
        
        if ( sexo == 'Mulher'){
            salario_totalF += salario
        }else{
            salario_totalM += salario
        }
        
        var continuar = prompt("Deseja continuar (Sim ou Não) ")

    }while ( continuar === 'Sim')
    
    return [salario_totalF, salario_totalM]
}

let valores_totais = total_salario_sexo()

console.log(`O valor total do salário masculino é: R$${valores_totais[1]}\nO valor total do salário feminino é: R$${valores_totais[0]}`)
