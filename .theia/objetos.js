//OBJETOS SÃO ESTRUTURAS QUE PERMITEM ARMAZENAR DIVERSOS VALORES 
// EM UMA MESMA VARIÁVEL, PERMITINDO ACESSÁ-LOS POR MEIO DE UM NOME

// CRIAÇÃO DE UM OBJETO VAZIO
let vazio1 = {} //forma moderna do JAVASCRIPT

let vazio2 = new Object() //forma antiga/ tradicional  do JAVASCRIPT

//criando um objeto com dados
let pessoa = {
    //OS DADOS SÃO ARMAZENADOS NO FORMATO
    //PROPRIEDADE: VALOR
    //ATRIBUTO: VALOR
    nome: 'Orkiyilson de Oliveira',
    sexo: 'M',
    dataNasc: '2008-04-19',
    ocupacao: 'estudante',
    //depois da propriedade, nomes, pode ter espaços ou acentos,
    //nesse caso o nome da propriedade precisa estar entre aspas
    'cidade de origem': 'Franca/SP',
    gostos: ['jogo', 'doces', 'dormir'] // VETOR EM UMA POSIÇÃO DE OBJETO
}
console.log(pessoa)
console.table(pessoa)

//EXIBINDO APENAS UMA PROPRIEDADE, POR EXEMPLO EXIBIR APENAS O NOME
//PROPRIEDADE SÃO AS "PARTES" DO FORMULÁRIO POR EXEMPLO
//NO OBJETO AS PROPRIEDADES SÃO NOMEADAS, OU SEJA TEM NOMES
console.log(pessoa.nome)
console.log(pessoa.ocupacao)

console.log(pessoa.cidade de origem) //QUANDO A PROPRIEDADE TEM ESPAÇOS OU ACENTOS, NÃO É POSSÍVEL
//USAR A SINTAXE DE PONTO. É NECESSÁRIO USAR A SINTAXE DE COLCHETES.

console.log(pessoa['cidade de origem'])

console.log(pessoa.gostos)

//A SINTAXE DOS COLCHETES SEMPRE FUNCIONA MESMO SE O NOME DA PROPRIEDADE FOR UMA ÚNICA PALAVRA SEM ACENTO
console.log(['nome'])

console.log(pessoa['gostos'][1])//usa o [] vetor, e mostra apenas o segundo gosto

//A SINTAXE DOS COLCHETES TEM OUTRA CONSEQUÊNCIA, É A POSSIBILIDADE
//DE USAR NOMES DE PROPRIEDADES QUE ESTÃO DENTRO DAS VARIÁVEIS

let x ='sexo'
console.log(pessoa[x])
x = 'dataNasc'
console.log(pessoa[x])

//pode-se criar uma propriedade para um objeto já existente
//basta atribuir um valor a uma nome de propriedade ainda não existente
pessoa.email = 'orkiyilson.com'
pessoa.celular = '(16) 9999-4567'
console.table(pessoa)

//criando um objeto vazio e só depois adicionando propriedades
let carro = {}
carro.marca = 'Volkswagen'
carro.modelo = 'Kombi'
carro.ano = 1971
carro['combustível'] = 'gasolina'
carro.cor = 'bege'

console.table(carro)

//excluindo propriedade de um objeto
delete carro.ano

console.table(carro)

console.log('--------------------------------------------------------')

//EXIBINDO TODAS AS PROPRIEDADES DE UM OBJETO
// for..in determina quais as propriedades de um objeto e 
// coloca cada uma delas em uma variável informada pelo
// usuário (p, no caso) a cada iteração do loop

for(let p in pessoa) {
    console.log(p)
}

console.log('--------------------------------------------------------')

for(let p in carro){
    console.log
}

//for...in para listar propriedades e valores de um objeto
 
for(let atrib in pessoa){
    console.log(atrib + ' -> ' + pessoa [atrib])
  }

  






















