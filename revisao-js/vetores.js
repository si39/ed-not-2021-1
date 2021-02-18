let frutas = ['maçã', 'laranja', 'pera', 'uva', 'mamão', 'banana']

//Vetor original
console.log(frutas)

//Retirar o último elemento de um vetor
let ultimaFruta = frutas.pop()

//Vetor alterado
console.log(frutas)
console.log(ultimaFruta)

//Remoção do primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Remoção em posição intermediária
//1° parâmetro -> a posição de remoção (contagem começa com 0)
//2° parâmetro -> a quantidade de elementos a remover
let terceiraFruta = frutas.splice(2, 1) // SPLICE SEMPRE RETORNARÁ UM VETOR

console.log(frutas)
console.log(terceiraFruta)

//Inserindo no Final do Vetor
frutas.push('amora') //Pode inserir mais de um elemento ao mesmo tempo
//por exemplo:
//frutas.push('amora','jaca')
console.log(frutas)

//Inserir no início do vetor
frutas.unshift('jabuticaba') //Também pode inserir mais de um elemento
//ao mesmo tempo, por exemplo: frutas.unshift('jabuticaba' , 'mexerica')
console.log(frutas)

//Inserção no meio do Vetor
//Parâmetros do splice() para inserção
//1° -> posição para inserção
//2° -> n° de elementos a serem excluídos (para inserção usa-se 0)
//3° -> em diante -> elemento(s) que será(ão) inserido(s)
frutas.splice(2, 0, 'pêssego') //Inserindo na terceira posição
// Também funciona para inserir vários elementos ao mesmo tempo, por exemplo 
// frutas.splice(2, 0, 'pêssego', 'jaca', 'nectarina' 
console.log(frutas)

//Usando splice() para substituição
//Parâmetros:
//1° -> posição para substituição
//2° -> quantidade de elementos que serão excluídos (para substituição, 1)
//3° -> o elemento que será incluído no lugar

frutas.splice(4, 1, 'ameixa') // Substituição na 5° posição
console.log(frutas)

// Inserção múltipla com splice()
frutas.splice(1, 0, 'nectarina', 'jaca')
console.table(frutas) // ******esse comendo as frutas ficam organizadas em ordem númerica*******



/****************************
 PERCURSOS DE VETOR  *******************************/

 console.log('--------------------------------------------------------')

 // 1) PERCURSO COM FOR TRADICIONAL
 // a) A CONTAGEM COMEÇA DO ZERO (0 - PRIMEIRO ELEMENTO)
 // b) OCORRE ENQUANTO O CONTADOR FOR MENOR QUE O NÚMERO DE ELEMENTOS DO VETOR
 // c) lenght termina com TH (língua mole)
 // d) É O MÉTODOS MAIS FLEXÍVEL POIS, SE NECESSÁRIO, É POSSÍVEL
 // FAZER UM PERCURSO PARCIAL(COMEÇAR EM ALGUM ELEMENTO QUE NÃO É O PRIMEIRO E TERMINAR ANTES DO FINAL)
 for(let i = 0; i < frutas.length; i++) {
     console.log(i, frutas[i])
 }

// 2) FOR tradicional em ordem inversa
// a) O contador inicia-se em length -1
// b) A condição é contar MAIOR ou IGUAL a Zero (0 - primeiro elemento)
for(let i = frutas.length - 1; i >= 0; i--){
    console.log(i, frutas[i])
}

console.log('--------------------------------------------------------')

//3) PERCURSO COM FOR ..OF
// a) SEMPRE PERCORRE O VETOR INTEIRO, NA ORDEM NATURAL, SEM
// UMA VARIÁVEL CONTADORA 
// VARIÁVEIS:
// f -> VARIÁVEL QUE RECEBERÁ CADA ELEMENTO DO VETOR(pode ser qualquer nome válido de variável)
// frutas -> é o vetor a ser percorrido

//let x = 0
for(let f of frutas){
    console.log(x, f)
}
//console.log(x, f)

//x++

//4) PERCURSO COM forEach()
// forEach() recebe como parâmetro uma função que recebe como parâmetro
// cada elemento do vetor
// o nome do parâmetro da função pode ser qualquer nome válido de identificador
frutas.forEach(function(elemento) {
    console.log(elemento)
})


for(let f of frutas) {
    console.log(f)
}

console.log('--------------------------------------------------------')

//O mesmo forEach(), usando uma arrow function como parâmetro
frutas.forEach(elemento => console.log(elemento))











