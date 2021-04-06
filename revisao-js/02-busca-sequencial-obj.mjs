function buscaSequencial(vetor, valorBusca, fnComp) {
    for(let i = 0; i < vetor.length; i++) {
        // Em vez de fazer a comparação dentro da função de busca,
        // "terceirizamos" essa comparação chamando uma função externa
        if(fnComp(vetor[i], valorBusca)) return i // Retorna a posição onde foi encontrado
    }
    return -1   // Valor de busca não encontrado
}

 /*function comparaNome(objNome, valorBusca) {
     return objNome.first_name === valorBusca
 }*/

 //const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca 
 //const comparaGrupo = (objNome, valorBusca) => objNome.group_name === valorBusca

 import { objNomes } from './includes/vetor-obj-nomes.mjs'

 console.log(buscaSequencial(objNomes, obj => obj.first_name === 'FAUSTO'))
 console.log(buscaSequencial(objNomes, obj => obj.group_name === 'MARIA'))

 //PRIMEIRO NOME DA LISTA QUE TEM MAIS DE 1000 PESSOAS REGISTRADAS COM ELE.
 let pos = buscaSequencial(objNomes, obj => obj.frequency_total > 1000) 

 console.log(objNomes[pos])

//PRIMEIRO NOME MASCULINO DA LISTA COM MAIS DE 1000 REGISTRADOS
 pos = buscaSequencial(objNomes, obj => obj.frequency_total > 1000 && obj.classification === 'M')
 console.log(objNomes[pos])


 //console.log(buscaSequencial(objNomes, 'FAUSTO', comparaNome))
 //console.log(buscaSequencial(objNomes, 'FAUSTO', (obj, busca) => obj.first_name === busca))
 //console.log(buscaSequencial(objNomes, 'MARIA', comparaGrupo))
 //console.log(buscaSequencial(objNomes, 'MARIA', (obj, busca) => obj.group_name === busca))


