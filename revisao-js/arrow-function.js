//Função que eleva um número ao quadrado
//Se precisar disso em situação real, use Math.pow() ou 
// o operador **
function quadrado(n) {
    return n * n
}
console.log(quadrado(9))

//CARACTERÍSTICAS DA FUNÇÃO ACIMA:
//1) APENAS UM PARÂMETRO
//2) APENAS UMA LINHA DE CÓDIGO, COM RETURN
//3) CANDIDATA PERFEITA A VIRAR ARROW FUNCTION

// TRANSFORMANDO UM arrow function
// a) NÃO PRECISA DE PARÊNTESES ENVOLVENDO O PARÂMETRO
// b) A PALAVRA function é substituida pelo sinal =>, DEPOIS do parâmetro
// c) NÃO SÃO necessárias as chaves nem a palavra return
const quadrado2 = n => n * n
console.log(quadrado(9))

