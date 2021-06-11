/*
    ESTRUTURA DE DADOS ÁRVORE BINÁRIA DE BUSCA
    - Árvore ~> é uma estrutura de dados não-linear, hierárquica,
      que é formada recursivamente por outras subárvores.
    - Árvore binária ~> uma árvore na qual cada nodo tem grau máximo
      igual a 2 (ou seja, cada nodo pode ter, no máximo, dois descendentes
      diretos).
    - Árvore binária de busca ~> é uma árvore binária otimizada para a
      operação de busca binária. Por isso, na inserção, os valores são 
      colocados já em ordem.
*/

class Node {
    constructor(val) {
        this.data = val
        this.left = null        // Ponteiro para subárvore à esquerda
        this.right = null       // Ponteiro para subárvore à direita
    }
}

export class BinarySearchTree {

     #root           // Raiz da árvore

    constructor() {
        this.#root = null
        console.log(this.#root)
        this.#root = null        
    }

    insert(val) {
@@ -37,8 +36,7 @@ export class BinarySearchTree {
        // 2º caso: inserção recursiva ~> percorre a árvore recursivamente
        // para encontrar a posição do novo nodo
        else this.#insertNode(node, this.#root)

        console.log(this.#root)

    }

    // Parâmetros:
@@ -109,6 +107,121 @@ export class BinarySearchTree {
        }
    }

    // Retorna o menor valor da árvore
    min() {
        let min = this.#minNode(this.#root)
        return min !== null ? min.data : null
    }

    // Encontra o nodo com o menor valor da árvore ou subárvore
    #minNode(root) {
        let min = root
        while(min !== null && min.left !== null) min = min.left
        return min
    }

    // Retorna o maior valor da árvore
    max() {
        let max = this.#maxNode(this.#root)
        return max !== null ? max.data : null
    }

    // Encontra o nodo com o maior valor da árvore ou subárvore
    #maxNode(root) {
        let max = root
        while(max !== null && max.right !== null) max = max.right
        return max
    }

    // Procura pelo valor especificado e retorna true caso exista
    // ou false caso contrário
    search(key) {
        let node = this.#searchNode(this.#root, key)
        // Se for retornado um node válido (diferente de null),
        // é porque o valor existe na árvore
        return node !== null
    }

    // Procura pelo nodo que armazena key
    #searchNode(root, key) {

        // 1º caso: a árvore está vazia
        if(root === null) return null

        // 2º caso: o valor de key é MENOR que o valor da raiz
        // Continua a busca pela subárvore ESQUERDA
        if(key < root.data) return this.#searchNode(root.left, key)

        // 3º caso: o valor de key é MAIOR que o valor da raiz
        if(key > root.data) return this.#searchNode(root.right, key)

        // 4º caso: o valor de key é IGUAL ao valor da raiz
        // O nodo que contém o valor foi encontrado e é root
        return root
    }

    remove(key) {
        this.#root = this.#removeNode(this.#root, key)
    }

    // Remove o nodo com o key especificado a partir de root
    #removeNode(root, key) {

        // 1º caso: árvore vazia
        if(root === null) return null

        // 2º caso: o valor de key é MENOR que o valor da raiz
        if(key < root.data) {
            root.left = this.#removeNode(root.left, key)
            return root
        }

        // 3º caso: o valor de key é MAIOR que valor da raiz
        if(key > root.data) {
            root.right = this.#removeNode(root.right, key)
            return root
        }

        // 4º caso: o valor de key é IGUAL ao valor da raiz
        // (encontrou o nodo a ser removido)

        // Caso 4.1: remoção de nodo folha (grau 0)
        if(root.left === null && root.right === null) {
            root = null
            return root
        }

        // Caso 4.2: remoção de nodo grau 1 com descendentes à esquerda
        if(root.left !== null && root.right === null) {
            root = root.left
            return root
        }

        // Caso 4.3: remoção de nodo grau 1 com descendentes à direita
        if(root.left === null && root.right !== null) {
            root = root.right
            return root
        }

        // Caso 4.4: remoção de nodo de grau 2

        // Precisamos encontrar:
        // a) o MAIOR nodo da subárvore ESQUERDA *ou*
        // b) o MENOR nodo da subárvore DIREITA
        const newRoot = this.#maxNode(root.left)
        // ou: const newRoot = this.#minNode(root.right)

        // Leva o valor do novo root para o root original
        root.data = newRoot.data

        // Excluímos o valor duplicado que ficou na subárvore esquerda do root
        // (de onde veio o maior valor)
        root.left = this.#removeNode(root.left, newRoot.data)
        // ou: root.right = this.#removeNode(root.right, newRoot.data)

        return root
    }

}

const arvore = new BinarySearchTree()
@@ -118,6 +231,12 @@ arvore.insert(19)

arvore.insert(34)
arvore.insert(88)
arvore.insert(25)
arvore.insert(50)
arvore.insert(30)
arvore.insert(3)
arvore.insert(66)
arvore.insert(12)
arvore.insert(81)

let percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
@@ -129,4 +248,50 @@ console.log({percursoPre})

let percursoPos = []
arvore.postOrderTraversal(val => percursoPos.push(val))
console.log({percursoPos}) 
console.log({percursoPos})

let min = arvore.min()
let max = arvore.max()
console.log({min, max})

let existe48 = arvore.search(48)
let existe25 = arvore.search(25)
let existe19 = arvore.search(19)
let existe10 = arvore.search(10)
console.log({existe48, existe25, existe19, existe10})

console.log('--------------------------------------------------------')

percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log({percursoEm})

// Remoção de nodo grau 0
arvore.remove(81)
percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log('Sem o 81:', {percursoEm})

// Remoção de nodo grau 1 com esquerda
arvore.remove(34)
percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log('Sem o 34:', {percursoEm})

// Remoção de nodo grau 1 com direita
arvore.remove(50)
percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log('Sem o 50:', {percursoEm})

// Remoção de nodo grau 2
arvore.remove(19)
percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log('Sem o 19:', {percursoEm})

// Remoção do nodo raiz
arvore.remove(41)
percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log('Sem o 41:', {percursoEm})