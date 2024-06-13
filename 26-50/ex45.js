// 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
// o número de vezes que astring aparece no array.


function contarOcorrencias(array) {
    let obj = {};

    // Percorre o array
    array.forEach(item => {
        // Se a chave já existe no objeto, incrementa o contador
        if (obj[item]) {
            obj[item]++;
        } else {
            // Se não existe, cria a chave e define o contador como 1
            obj[item] = 1;
        }
    });

    return obj;
}

// Exemplo de uso
let array = ['a', 'a', 'b', 'c', 'd', 'e'];
let resultado = contarOcorrencias(array);
console.log(resultado);