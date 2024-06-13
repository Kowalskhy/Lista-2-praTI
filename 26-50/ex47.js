// 47. Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.

function transformarObjeto(objeto, funcao) {
    let resultado = {};

    for (let propriedade in objeto) {
        // Verifica se a propriedade é própria do objeto (não herdada)
        if (objeto.hasOwnProperty(propriedade)) {
            // Aplica a função fornecida ao valor da propriedade e armazena o resultado
            resultado[propriedade] = funcao(objeto[propriedade]);
        }
    }

    return resultado;
}

// Exemplo de uso:
let objetoEntrada = {
    a: 1,
    b: 2,
    c: 3
};

// Define a função que será aplicada a cada valor do objeto
function dobrar(valor) {
    return valor * 2;
}

let objetoTransformado = transformarObjeto(objetoEntrada, dobrar);
console.log(objetoTransformado); // Deve exibir: { a: 2, b: 4, c: 6 }
