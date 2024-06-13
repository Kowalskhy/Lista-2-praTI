// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
// 350,00.

let dados = [
    { nome:'Yuri Kowalski' , salario: 2500 , n_filhos: 3 },
    { nome:'Rafaela Kowalski', salario: 2000 , n_filhos: 1 },
    { nome:'Fabiane Kowalski' , salario: 150 , n_filhos: 4 },
    { nome:'Cláudia Kowalski' , salario: 1500 , n_filhos: 3 },
    { nome:'Tatiana Kowalski' , salario: 300 , n_filhos: 2 }
]

function estatisticas (dados)
{
    let soma_salario = 0
    let soma_filhos = 0
    let salario_min = 0
    let maior_salario = 0

    dados.forEach( dado => {

        soma_salario += dado.salario
        soma_filhos += dado.n_filhos

        if ( dado.salario <= 350 ){
            salario_min++
        }

        if ( dado.salario > maior_salario ){
            maior_salario = dado.salario
        }
        
    });

    let media_salario = soma_salario / dados.length
    let media_filhos = parseInt(soma_filhos / dados.length)
    let percentual_min = (salario_min / dados.length) * 100

    return {
        media_salario: media_salario,
        media_filhos: media_filhos,
        maior_salario: maior_salario,
        percentual_min: percentual_min
    }

}

let resultado = estatisticas(dados)
console.log(`
A média de salário é de: ${resultado.media_salario}R$\n
A média de fulhos é de: ${resultado.media_filhos}\n
O maior salário é de: ${resultado.maior_salario}R$\n
O percentual de pessoas com o salario de até 350R$ é: ${resultado.percentual_min}%
`)

// CASO SEJA VIA INPUT AS INFORMAÇÕES 

// const prompt = require('prompt-sync')()

// function estatisticas(dados) {
//     let somaSalario = 0;
//     let somaFilhos = 0;
//     let numSalariosBaixos = 0;
//     let maiorSalario = 0;

//     dados.forEach(dado => {
//         somaSalario += dado.salario;
//         somaFilhos += dado.n_filhos;

//         if (dado.salario <= 350) {
//             numSalariosBaixos++;
//         }

//         if (dado.salario > maiorSalario) {
//             maiorSalario = dado.salario;
//         }
//     });

//     let mediaSalario = somaSalario / dados.length;
//     let mediaFilhos = somaFilhos / dados.length;
//     let percentualSalariosBaixos = (numSalariosBaixos / dados.length) * 100;

//     return {
//         mediaSalario: mediaSalario,
//         mediaFilhos: mediaFilhos,
//         maiorSalario: maiorSalario,
//         percentualSalariosBaixos: percentualSalariosBaixos
//     };
// }

// function lerDados() {
//     let dados = [];
//     let continuar = true;
//     let sim_nao

//     while (continuar) {
//         let nome = prompt("Digite o nome:");
//         let salario = parseFloat(prompt("Digite o salário:"));
//         let numFilhos = parseInt(prompt("Digite o número de filhos:"));

//         dados.push({ nome: nome, salario: salario, n_filhos: numFilhos });

//         sim_nao = prompt("Deseja continuar ('Sim' ou 'Nao'): ")

//         if( sim_nao === 'Nao'){
//             continuar = false
//         }
//     }

//     return dados;
// }

// let dados = lerDados();
// let resultado = estatisticas(dados);
// console.log(`
// A média de salário é de: ${resultado.mediaSalario.toFixed(2)}R$
// A média de filhos é de: ${resultado.mediaFilhos.toFixed(2)}
// O maior salário é de: ${resultado.maiorSalario.toFixed(2)}R$
// O percentual de pessoas com salário até R$ 350,00 é de: ${resultado.percentualSalariosBaixos.toFixed(2)}%
// `);

