// 46. Suponha que você tem um array de objetos onde cad aobjeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.

function totalVendasPorVendedor(vendas) {
    let resumoVendas = {};

    // Percorre o array de vendas
    vendas.forEach(venda => {
        // Verifica se o vendedor já está no objeto de resumo
        if (resumoVendas[venda.vendedor]) {
            // Se sim, adiciona o valor da venda ao total existente
            resumoVendas[venda.vendedor] += venda.valor;
        } else {
            // Se não, cria uma nova entrada para o vendedor com o valor da venda
            resumoVendas[venda.vendedor] = venda.valor;
        }
    });

    return resumoVendas;
}

// Exemplo de uso
let vendas = [
    { vendedor: 'João', valor: 100 },
    { vendedor: 'Maria', valor: 200 },
    { vendedor: 'João', valor: 150 },
    { vendedor: 'Maria', valor: 300 }
];

let resumo = totalVendasPorVendedor(vendas);
console.log(resumo);
