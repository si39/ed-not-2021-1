function k(m, n, o) {    
    if(o <= n) return // condição de saída das chamadas recursivas
    const p = o    
    let q = n - 1

        for(let i = n; i < o; i++) {
        if(n(m[p],  m[i])) { // estavam invertidos
            q++
            if(i !== q) {
                [ m[i], m[q] ] = [ m[q], m[i] ]
        }
    }
   }
    q++
    if(n(m[q], m[p])) {
        [ m[p], m[q] ] = [ m[q], m[p] ]
        q++
        k(m, n, q - 1)
    k(m, q + 1, o)
}
}


// Algoritmo : QUICK SORT
// Colocar mais um parâmetro ( 4 no total para ordenar )
// Esse parâmetro nós acrescentamos para comparar
// ESCOLHE UM DOS ELEMENTOS DO VETOR PARA SER O PIVÔ
// k : ordena
// m : vetor a ser ordenado
// n: início do vetor
// 0 : fim do vetor
// q : variável que corresponde a div
// i : contador , inicia em 0 e vai até a penúltima posição.

