// 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
// inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
// item em estoque. Escreva uma função que combine os inventários em um único objeto.
// Se um item aparecer em ambas as lojas, some as quantidades

let inventarioLojaA = {
    produto1: 5,
    produto2: 5,
    produto3: 5,
    produto4: 5,
    produto5: 5
}
let inventarioLojaB = {
    produto6: 1,
    produto7: 2,
    produto8: 3,
    produto9: 4,
    produto1: 5
}

function compara_produtos(inventarioLojaA, inventarioLojaB){

    let obj_comb = {}

    for ( let i in inventarioLojaA ){
        obj_comb[i] = inventarioLojaA[i]
    }

    for ( let i in inventarioLojaB){
        if(obj_comb[i]){
            obj_comb[i] += inventarioLojaB[i] 
        }else{
            obj_comb[i] = inventarioLojaB[i]
        }
    }
        
    return obj_comb
}

let inventario_final = compara_produtos(inventarioLojaA, inventarioLojaB)
console.log(inventario_final)

