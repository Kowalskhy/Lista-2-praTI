// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.

function gabarito(){

    let g = []
    let alternativas = ['A','B','C','D','E']

    for ( let i=0; i < 20; i++ ){
        let alternativa_aleatoria = alternativas[Math.floor(Math.random() * alternativas.length)]
        g.push(alternativa_aleatoria)
    }
    return g
}

function resposta_alunos(){

    let resposta = []
    let alternativas = ['A','B','C','D','E']

    for ( let i=0; i < 20; i++ ){
        let alternativa_aleatoria = alternativas[Math.floor(Math.random() * alternativas.length)]
        resposta.push(alternativa_aleatoria)
    }
    return resposta
}

function qte_alunos(gabarito, n_alunos){

    for ( let i=1; i < n_alunos; i++ ){
        let alunos = resposta_alunos()
        let acertos = 0

        for ( let i=0; i < gabarito.length; i++ ){
            if ( gabarito[i] === alunos[i] ){
                acertos ++
            }
        }

        console.log(`Aluno ${i}`)
        console.log(`Respostas: ${alunos}`)
        console.log(`Acertos: ${acertos}`)
        if ( acertos >= 12 ){
            console.log(`Aprovado!!!`)
        }else{
            console.log(`Reprovado!!!`)
        }
        console.log('----------------------------------------')
    }
}
let gabaritO = gabarito()
console.log(`Gabarito: ${gabaritO}`)
console.log('-------------------------------')
qte_alunos(gabaritO, 50)
