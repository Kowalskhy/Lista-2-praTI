// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.

const prompt = require('prompt-sync')()

let nome = prompt("Insira o nome do funcionário: ")
let cargo = prompt("Insira o cargo do funcionário: ")
let salario = parseInt(prompt("Insira o salário do funcionário: "))

let funcionario = {
    'nome': nome,
    'cargo': cargo,
    'salario': salario
}

console.log("Registro do funcionário:")
console.log(`Nome: ${funcionario.nome}`)
console.log(`Cargo: ${funcionario.cargo}`)
console.log(`Salário: R$${funcionario.salario}`)
