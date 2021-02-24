// NÚMEROS
let a = 10, b = 8, c = 10
console.log(a > b)
console.log(a < b)
console.log(a == b)
console.log(a != b)


//STRINGS
a = 'CATIFUNDA'
b = 'FELISBINO'
//b = 'ÁGATHA'
c = 'CATIFUNDA'
console.log(a > b)
console.log(a < b)
console.log(a == b)
console.log(a != b)


console.log('-------------------------------------------------------')

//BOOLEANOS
a = true
b = false 
c = true

console.log(a > b)
console.log(a < b)
console.log(a == b)
console.log(a != b)

console.log('-------------------------------------------------------')

//VETORES
a =  [10, 20, 30, 40, 50]
b =  [-3, -2, -1] 
c =  [10, 20, 30, 40, 50]

console.log(a > b)
console.log(a < b)
console.log(a == b)
console.log(a != b)

console.log('-------------------------------------------------------')

//COMPARAÇÕES DIRETAS DE VETORES DÃO RESULTADOS INCONSISTENTES
//NÃO É POSSÍVEL COMPARAR DIRETAMENTE DOIS VETORES

console.log('-------------------------------------------------------')

a = {marca: 'Fiat', modelo: '147', ano: 1979 }
b = {marca: 'Chevrolet', modelo: 'Chevette', ano: 1982}
c = {marca: 'Fiat', modelo: '147', ano: 1979 }

console.log(a > b)
console.log(a < b)
console.log(a == b)
console.log(a != b)

//OBJETOS TAMBÉM NÃO PODEM SER COMPARADOS DIRETAMENTE ENTRE SI

//CONCLUSÃO: APENAS OS SEGUINTES TIPOS DE DADOS SÃO DIRETAMENTE COMPARÁVEIS ENTRE SI.
// -number
// -string
// - boolean