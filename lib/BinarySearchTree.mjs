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
    }

    insert(val) {

        const node = new Node(val)

        // 1º caso: árvore vazia
        if(this.#root === null) this.#root = node

        // 2º caso: inserção recursiva ~> percorre a árvore recursivamente
        // para encontrar a posição do novo nodo
        else this.#insertNode(node, this.#root)

        console.log(this.#root)
    }

    // Parâmetros:
    // node -> nodo a ser inserido
    // root -> a raiz da subárvore onde será feita a inserção
    #insertNode(node, root) {
        // 1º caso: valor do nodo é menor que o valor da raiz
        if(node.data < root.data) {
            // verifica se o nodo à esquerda da raiz está desocupado
            // e, se for o caso, insere aí o nodo
            if(root.left === null) root.left = node
            // caso o nodo à esquerda da raiz jé exista, reiniciamos
            // o processo considerando este como raiz da subárvore
            else this.#insertNode(node, root.left)
        }
        // 2º caso: valor do nodo é maior que o valor da raiz -> vai para a direita
        else if(node.data > root.data) {
            // acontece a mesma coisa que no caso anterios, mas do lado direito
            if(root.right === nulll) root.right = node
            else this.insertNode(node, root.right)
        }
        // note que, se o valor do nodo for igual ao valor da raiz, nada acontece:
        // o pedido de inserção é ignorado para evitar valores duplicados na árvore
        
    }
    //NOTE QUE, SE O VALOR DO NODO FOR IGUAL AO VALOR DA RAIZ, NADA ACONTECE;
    //O PEDIDO DE INSERÇÃO É IGMORADO PARA EVITAR VALORES DUPLICADOS NA ÁRVORE.


/****************************************************
 *PERCURSOS
 **************************************************
 //PERCURSO EM ORDEM
 //1° VISITA EM ORDEM A SUBÁRVORE ESQUERDA
 //2° VISITA A RAIZ
 //3° VISITA EM ORDEM A SUBÁRVORE DIREITA
 // fnCallback: função externa que será chamada toda vez que o percurso 
 //passar por um nodo 
*/

inOrderTraversal(fnCallback, root = this.#root){
    if(root !==null){
        this.inOrderTraversal(fnCallback, root.left) //1°
        fnCallback(root.data)                        //2°
        this.inOrderTraversal(fnCallback,root.right) //3°
    } 
} 

/****************************************************
 *PERCURSOS PRÉ-ORDEM
 **************************************************
 //1° VISITA A RAIZ 
 //2° VISITA PRÉ-ORDEM A SUBÁRVORE ESQUERDA
 //3° VISITA PRÉ-ORDEM A SUBÁRVORE DIREITA
 // fnCallback: função externa que será chamada toda vez que o percurso 
 //passar por um nodo 
*/
preOrderTraversal(fnCallback, root = this.#root){
    if(root !== null){
        fnCallback(root.data)                          //1°
        this.preOrderTraversal(fnCallback, root.left)  //2°
        this.preOrderTraversal(fnCallback, root.right) //3°
     }
}


 /****************************************************
 *PERCURSOS Pós-ORDEM
 **************************************************
 //1° VISITA PÓS-ORDEM A SUBÁRVORE ESQUERDA
 //2° VISITA PRÉ-ORDEM A SUBÁRVORE DIREITA
 //3° VISITA A RAIZ
 // fnCallback: função externa que será chamada toda vez que o percurso 
 //passar por um nodo 
*/
postOrderTraversal(fnCallback, root = this.#root){
    if(root !== null){                                
        this.postOrderTraversal(fnCallback, root.left)  //1°
        this.postOrderTraversal(fnCallback, root.right) //2°
        fnCallback(root.data)                          //3° 

    }
}

const arvore = new BinarySearchTree()
arvore.insert(41)
arvore.insert(76)
arvore.insert(19)
arvore.insert(34)
arvore.insert(88)
arvore.insert(25)

let percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log({percursoEm})

let percursoPre = []
arvore.preOrderTraversal(val => percursoPre.push(val))
console.log({percursoPre})

let percursoPos = []
arvore.postOrderTraversal(val => percursoPos.push(val))
console.log({percursoPos})
