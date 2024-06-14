// 49. Você recebe um array de objetos representando transações financeiras. Cada
// transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
// onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
// essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.

function agrupaTransacoesPorCategoria(transacoes) {
    let resultado = {};

    transacoes.forEach(transacao => {
        const { categoria, valor } = transacao;

        // Verifica se a categoria já está no resultado
        if (!resultado[categoria]) {
            // Inicializa a categoria com um array de transações e um subtotal de valor
            resultado[categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }

        // Adiciona a transação à categoria correspondente
        resultado[categoria].transacoes.push(transacao);

        // Atualiza o subtotal da categoria
        resultado[categoria].subtotal += valor;
    });

    return resultado;
}

// Função para exibir o objeto de forma legível no console
function exibirAgrupadoPorCategoria(agrupadoPorCategoria) {
    for (let categoria in agrupadoPorCategoria) {
        console.log(`Categoria: ${categoria}`);
        console.log('Transações:');
        agrupadoPorCategoria[categoria].transacoes.forEach(transacao => {
            console.log(`  ID: ${transacao.id}, Valor: ${transacao.valor}, Data: ${transacao.data}`);
        });
        console.log(`Subtotal: ${agrupadoPorCategoria[categoria].subtotal}\n`);
    }
}

// Exemplo de uso
const transacoes = [
    { id: 1, valor: 100, data: '2023-06-12', categoria: 'alimentação' },
    { id: 2, valor: 200, data: '2023-06-13', categoria: 'transporte' },
    { id: 3, valor: 50, data: '2023-06-14', categoria: 'alimentação' },
    { id: 4, valor: 150, data: '2023-06-15', categoria: 'educação' },
    { id: 5, valor: 300, data: '2023-06-16', categoria: 'transporte' }
];

const agrupadoPorCategoria = agrupaTransacoesPorCategoria(transacoes);
exibirAgrupadoPorCategoria(agrupadoPorCategoria);

