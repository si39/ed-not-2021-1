function buscaSequencial(vetor, valorBusca){
    for(let i = 0; i < vetor.length; i++){
        // EM VEZ DE FAZER A COMPARAÇÃO DENTRO DA FUNÇÃO BUSCA,
        //"TERCEIRIZAMOS" ESSA COMPARAÇÃO CHAMANDO UMA FUNÇÃO EXTERNA
        if(vetor[i] === valorBusca) return i //retorna a posição onde foi encontrado
    }
}
return -1 //Valor de busca não encontrado



/*function comparaNome(objNome, valorBusca){
    return objNome.first.name === valorBusca
}*/




const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

import { objNome } from './includes/vetor-obj-nomes.mjs'

console.log(buscaSequencial(objNomes, 'FAUSTO', comparaNome))

