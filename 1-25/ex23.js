// 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
// diagonal principal são iguais a 1 e os demais são nulos.

// [1 0 0 0 0 0 0
//  0 1 0 0 0 0 0
//  0 0 1 0 0 0 0
//  0 0 0 1 0 0 0
//  0 0 0 0 1 0 0
//  0 0 0 0 0 1 0
//  0 0 0 0 0 0 1   
// ]

function matriz (n) {

    let matriz_id = []

    for (let i=0; i<n; i++){

        matriz_id[i] = []

        for (let j=0; j<n; j++){
            
            if ( i === j ){

                matriz_id[i][j] = 1

            }else{

                matriz_id[i][j] = 0

            }   
        }
    }

    return matriz_id
}

function exibir_matrizID (teste){
    
    for (let i=0; i<teste.length; i++){
        console.log(teste[i].join(" "))
    }
}
let teste = matriz(7)
exibir_matrizID(teste)