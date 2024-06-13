// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

// Array de objetos representando os funcionários
let funcionarios = [
    { matricula: '001', nome: 'João Silva', salario_bruto: 3000 },
    { matricula: '002', nome: 'Maria Oliveira', salario_bruto: 3500 },
    { matricula: '003', nome: 'Carlos Pereira', salario_bruto: 4000 },
    { matricula: '004', nome: 'Ana Souza', salario_bruto: 4500 },
    // Assim segue para 80 funcionários
]

function calculo_inss(salario_bruto) {

    return salario_bruto * 0.12

}

function salario_liquido(salario_bruto, inss){

    return salario_bruto - inss
}

funcionarios.forEach( funcionario => {
    let inss = calculo_inss(funcionario.salario_bruto);
    let salarioLiquido = salario_liquido(funcionario.salario_bruto, inss);

    console.log(`Matrícula: ${funcionario.matricula}`)
    console.log(`Nome: ${funcionario.nome}`)
    console.log(`Salário Bruto: R$${funcionario.salario_bruto.toFixed(2)}`)
    console.log(`Dedução INSS: R$${inss.toFixed(2)}`)
    console.log(`Salário Líquido: R$${salarioLiquido.toFixed(2)}`)
    console.log( '-----------------------------------------------')
})


