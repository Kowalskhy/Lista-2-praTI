// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
// de cada coluna separadamente.

function criar_matriz() {
    let matriz = [];
    for (let i = 0; i < 15; i++) {
        let linha = [];
        for (let j = 0; j < 20; j++) {
            let n = Math.floor(Math.random() * 10);
            linha.push(n);
        }
        matriz.push(linha);
    }
    return matriz;
}

let m = criar_matriz();

function soma_coluna(m) {
    let soma = [];

    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 20; j++) {
            if (soma[j] === undefined) { // Verifica se a posição ainda não foi inicializada, para que tenha valores em j e soma[j] += m[i][j] seja possível, evitando mais um loop para criar um vetor[j] com zeros
                soma[j] = 0;
            }
            soma[j] += m[i][j];
        }
    }
    return soma;
}

let somatorio = soma_coluna(m);
console.table(m)

somatorio.forEach((somas, index) => {
    console.log(`Coluna ${index + 1}: ${somas}`);
});

