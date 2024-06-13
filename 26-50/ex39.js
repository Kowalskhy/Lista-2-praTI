// 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
// vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.


function vetor(){

        const valores = Math.floor(Math.random() * 3)

        switch (valores){
            case 0:
                return 0
            case 1:
                return -Math.floor(Math.random() * 10)
            case 2:
                return Math.floor(Math.random() * 10)
        }
}

function vetor2(vetor1){

    let vetor2 = []
    
    for ( let i=0; i < vetor1.length; i++ ){
        if ( vetor1[i] > 0 ){
            vetor2.push(vetor1[i])
        }
    }
    return vetor2
}

let vetor1 = []
for (let i=0; i < 100; i++ ){
    vetor1.push(vetor())
}

console.log(`Vetor original: [${vetor1}]`)
let vetor_positivo = vetor2(vetor1)
console.log(`Vetor compactado: [${vetor_positivo}]`)


