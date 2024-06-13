// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const prompt = require('prompt-sync')()

function peso_ideal(alt, sexo){

    if ( sexo === 'Masculino'){

        return (72.7 * alt) - 58 

    }else{

        return (62.7 * alt) - 44.7 
    }

}

let alt = parseFloat(prompt("Insira a sua altura: "))
let sexo = prompt("Informe seu genero ( Masculino ou Feminino ): ")

if ( sexo !== 'Masculino' && sexo !== 'Feminino' ){

        console.log('Informação Inválida, favor inserir "Masculino" ou "Feminino"!')
        
    }else if ( isNaN(alt) ){

        console.log("Informação inválida!")

    }else{
        let resultado = peso_ideal(alt, sexo)
        console.log(`O peso ideal é de: ${Math.floor(resultado)}Kg`)
    }