// 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
//  combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
//  sobre as do obj1 em caso deconflitos.

function combinarObjetos(obj1, obj2) {

    let resultado = {};

    for (let propriedade in obj1) {
        resultado[propriedade] = obj1[propriedade];
    }

    for (let propriedade in obj2) {
        resultado[propriedade] = obj2[propriedade];
    }

    return resultado;
}

let obj1 = {a: 1, b: 2, d: 3};
let obj2 = {b: 3, c: 4, d: 4};

let resultado = combinarObjetos(obj1, obj2);
console.log(resultado); 