/*****************************************/
 //* BUSCA BINÁRIA
 //* REQUER UM CONJUNTO DE DADOS ORDENADO
 // * ATUA DIVIDINDO O VETOR SUCESSIVAMENTE EM METDADES APROXIMADAS
 // * ATÉ QUE O VALOR DE BUSCA SEJA LOCALIZADO, OU QUE O PONTEIRO
 //* DE FIM ACABE ANTES DO PONTEIRO DE INÍCIO. ESSA ÚLTIMA SITUAÇÃO
 //* INDICA QUE O VALOR DE BUSCA NÃO EXISTE NO CONJUNTO./
 
 

 function buscaBinaria(vetor, valorBusca){
     let ini = 0
     let fim = vetor.length -1
     let meio 
     while(fim >= ini){
         meio = Math.floor((fim + ini) / 2) // Math.floor () arredonda para baixo
         if(vetor[meio] === valorBusca) return meio // Achou
         else if(valorBusca > vetor[meio]) ini = meio + 1
         else fim = meio -1
     }
     return -1 //não existe
 }

