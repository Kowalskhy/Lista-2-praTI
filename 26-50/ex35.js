// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
// vetor pode ser preenchido quantas vezes forem necessárias.

function vetores(){

    let vetor_par = []
    let vetor_impar = []
    let cont_par = 0
    let cont_impar = 0

    for ( let i=0; i < 30; i++ ){
        let n = Math.floor(Math.random() * 10 )

        if ( n % 2 === 0 ){
            vetor_par.push(n)
            cont_par++
            if ( cont_par === 5 ){
                console.log(`Vetor com valores pares: [${vetor_par}]`)
                vetor_par = []
                cont_par = 0
            }
        }else{
            vetor_impar.push(n)
            cont_impar++
            if ( cont_impar === 5){
                console.log(`Vetor com valores impares: [${vetor_impar}]`)
                vetor_impar = []
                cont_impar = 0
            }
        }
    }

    if ( cont_par > 0 ){
        console.log(`Vetor com valores pares: [${vetor_par}]`)
    }
    if ( cont_impar > 0 ){
        console.log(`Vetor com valores impares: [${vetor_impar}]`)
    }
    
}

vetores()