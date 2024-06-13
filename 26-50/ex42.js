// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.


// Passo 1: Criar o objeto 'dados' com várias propriedades
const dados = {
    nome: 'Maria',
    idade: 28,
    hobbies: ['leitura', 'natação'],
    endereço: {
        cidade: 'São Paulo',
        estado: 'SP'
    },
    notas: [10, 9, 8],
    altura: 1.65,
    amigos: ['João', 'Ana', 'Carlos'],
    projetos: [
        { nome: 'Projeto A', status: 'Concluído' },
        { nome: 'Projeto B', status: 'Em andamento' }
    ]
};

// Passo 2: Escrever a função que filtra propriedades que são arrays
function filtrarArrays(obj) {
    const resultado = {};
    for (const chave in obj) {
        if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}

// Usando a função para filtrar apenas as propriedades que são arrays
const propriedadesArrays = filtrarArrays(dados);

console.log(propriedadesArrays);
