// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')()

function preco_passagem(distancia){

    let preco

    if ( distancia <= 200 ){
        preco = parseFloat( distancia * 0.50 )
    }else{
        preco = parseFloat( distancia * 0.45 )
    }
    return preco
}

let distancia = parseFloat(prompt("Qual a distancia que deseja percorrer: "))

if ( !(isNaN(distancia)) ){
    console.log(`O preço da passagem é de: ${preco_passagem(distancia)}R$`)   
}else{
    console.log("Informação inválida, favor inserir um numero!")
}