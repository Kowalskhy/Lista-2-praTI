// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
// cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
// matriz lida e a modificada.

function matriz (){
    let m = [];

    for (let i = 0; i < 12; i++) {
        let linha = [];
        for (let j = 0; j < 13; j++) {
            let n = Math.floor(Math.random() * 10);
            linha.push(n);
        }
        m.push(linha);
    }
    return m;
}

function matriz_divida(m) {
    let matriz_divida = [];

    for (let i = 0; i < m.length; i++) {
        let maior = Math.abs(m[i][0]);

        for (let j = 1; j < m[i].length; j++) {
            let maior_abs = Math.abs(m[i][j]);
            if (maior_abs > maior) {
                maior = maior_abs;
            }
        }

        let linha_dividida = [];
        for (let j = 0; j < m[i].length; j++) {
            linha_dividida.push((m[i][j] / maior).toFixed(2));
        }
        matriz_divida.push(linha_dividida);
    }
    return matriz_divida;
}

let matriz_original = matriz();
let matriz_modificada = matriz_divida(matriz_original);

console.table(matriz_original);
console.table(matriz_modificada);