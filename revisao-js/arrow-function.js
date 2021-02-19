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

//FUNÇÃO MAIS DE UM PARÂMETRO
function potencia(b, e) { //b = base, e=expoente
    return b**e

}
console.log(potencia(2, 8))

//FUNÇÃO EQUIVALENTE NO FORMATO arrow function

//QUANDO TEMOS MAIS DE UM PARÂMETRO, OS PARÊNTESES EM VOLTA
// DOS ARGUMENTOS VOLTAM A SER OBRIGATÓRIOS

letpotencia2 = (b, e) => b ** e
console.log(potencia(2, 8))

// FUNÇÃO SEM PARÂMENTRO
function megasena() {
    //ESTA FUNÇÃO RETORNA UM NÚMERO ALEATÓRIO ENTRE 1 2 60
    //Math.random() -> retorna um número aleatório entre 0 (inclusive) e 1 (exclusive)
    //*60 -> ajusta a faixa de valores para entre 0 e 59
    // o + 1 -> ajusta a faixa de valores para entre 1 e 60
    //o Math.floor -> arredonda para o menor inteiro ( tira as casas decimais)

    return Math.floor(Math.randow() * 60 + 1
} 
console.log(megasena(), megasena(), megasena(),megasena(),megasena(),megasena())

//QUANDO A FUNÇÃO NÃO TEM ARGUMENTOS , NA arrow function é neessário deixa
//um par de parênteses vazios para marcar seu lugar
const megasena = () => Math.floor(Math.random() * 60 + 1)
console.log(megasena2(), megasena2(), megasena2(),megasena2(),megasena2(),megasena2())

//FUNÇÃO COM MAIS DE UMA LINHA DE CÓDIGO NO CORPO
function somaVet(vet){
    let soma = 0
    for(let n of vet) soma += n
    return soma
}
console.log(somaVet([12, 42, -11, 20, 9, 16]))

//QUANDO A FUNÇÃO TEM MAIS DE UMA LINHA DE CÓDIGO, NA arrow function, EQUIVALENTE
//RETORNAM AS CHAVES E TAMBÉM A PALAVRA return, caso ela retorne valor

const somaVet2 = vet =>{
    let soma = 0
    for (let n of vet) soma += n
    return soma
}
console.log(somaVet([12, 42, -11, 20, 9, 16]))

//CONCLUSÃO: Arrow function foram concebidas para facilitar a escrita de
//funções de apenas uma linha, embora também possam ser usadas para funções
// de múltiplas linhas.

















