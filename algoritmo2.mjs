function k(m, n) {
    let o = 0, p = m.length - 1, q //( é o meio)
    while(p >= o) {
        q = Math.floor((p + o) / 2)  // Math.floor () 

        if(m[q] === n) {
            return q
        }
        else if(n > m[q]) {
        o = q + 1
        }
        else p = q - 1        // valor busca
        return -1  // Não existe
    }
    
}
      import {countries} from './countries.mjs'

      console.time('Buscando BRAZIL')
      console.log(k(countries, (obj, busca = 'BRAZIL') => {
          if(busca === obj.country) return 0
          else if(busca < obj.country) return -1
          else return 1
      }))
      console.timeEnd('Buscando BRAZIL')


//* Algoritmo BUSCA BINÁRIA
//* REQUER UM CONJUNTO DE DADOS ORDENADO
//* ATUA DIVIDINDO O VETOR SUCESSIVAMENTE EM METDADES APROXIMADAS
//* ATÉ QUE O VALOR DE BUSCA SEJA LOCALIZADO, OU QUE O PONTEIRO
//* DE FIM ACABE ANTES DO PONTEIRO DE INÍCIO.

// MAPEAMENTO: 
// O parâmetro n, representa a função de busca
// O parâmetro m, vetor
// k : Função 
// q : meio da função
// 0 : é o contador de início, 
// p : é o fim da contagem
// 3 parâmetros ( fnComp, )