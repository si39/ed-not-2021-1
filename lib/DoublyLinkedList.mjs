/*
    ESTRUTURA DE DADOS LISTA DUPLAMENTE ENCADEADA
    - A lista encadeada é uma estrutura de dados formada por unidades
      de informação chamadas nodos ou nós.
    - Cada nodo da lista encadeada tem três partes: uma, que armazena a
      informação; a segunda, que guarda o endereço do nodo anterior; e a
      terceira, que guarda o endereço para o nodo seguinte da sequência
    - A qualquer momento, temos um conhecimento apenas limitado de onde
      se encontram todos os nodos da lista. Sabemos apenas onde está o
      primeiro e o último nodo da sequência. Os nodos intermediários precisam
      ser encontrados partindo-se do primeiro OU do último nodo e percorrendo
      a sequência
*/

class Node {
    constructor(val) {
        this.data = val     // Valor armazenado
        this.prev = null    // Ponteiro para o nodo anterior
        this.next = null    // Ponteiro para o nodo seguinte
    }
}

export class DoublyLinkedList {

    #head       // Primeiro nodo
    #tail       // Último nodo
    #count      // Quantidade de nodos

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    // Dada uma posição, retorna o nodo naquela posição
    #findNode(pos) {
        let node = null
        // Posição se encontra na primeira metade da lista
        if(pos < this.#count / 2) {
            node = this.#head
            for(let i = 0; i < pos; i++) node = node.next
        }
        // Posição se encontra na segunda metade da lista
        else {
            node = this.#tail
            for(let i = this.#count - 1; i > pos; i--) node = node.prev
        }
        return node
    }

    get empty() {
        return this.#count === 0
    }

    insert(pos, val) {

        const node = new Node(val)

        // 1º caso: lista vazia
        if(this.empty) {
            this.#head = node
            this.#tail = node
        }
        // 2º caso: inserção no início da lista
        else if(pos === 0) {
            node.next = this.#head
            this.#head.prev = node
            this.#head = node
        }
        // 3º caso: inserção no final da lista
        else if(pos >= this.#count) {
            this.#tail.next = node
            node.prev = this.#tail
            this.#tail = node
        }
        // 4º caso: inserção em posição intermediária
        else {
            // Encontra o nodo que ocupa atualmente a posição de inserção
            let nodePos = this.#findNode(pos)
            let before = nodePos.prev
            // O nodo anterior à posição passa a apontar para o novo nodo
            before.next = node
            // O novo nodo aponta de volta para o anterior
            node.prev = before
            // O novo nodo passa a apontar para o nodo que ocupava a posição
            node.next = nodePos
            // O antigo nodo da posição aponta de volta para o novo nodo
            nodePos.prev = node
        }
        this.#count++
    }

    insertHead(val) {       // Atalho para inserção no início
        this.insert(0, val)
    }

    insertTail(val) {       // Atalho para inserção no final
        this.insert(this.#count, val)
    }

    remove(pos) {

        // 1º caso: lista vazia ou posição fora dos limites
        if(this.empty || pos < 0 || pos > this.#count - 1) return undefined

        let removed

        // 2º caso: remoção do início
        if(pos === 0) {
            removed = this.#head
            this.#head = removed.next
            // Se existir um nodo válido como head, ele não terá antecessor
            if(this.#head) this.#head.prev = null
            // Remoção do último nodo: head é null, tail tem que ser também
            if(this.#count === 1) this.#tail = null
        }
        // 3º caso: remoção no final
        else if(pos === this.#count - 1) {
            removed = this.#tail
            this.#tail = removed.prev
            // Se existir um nodo válido como tail, ele não terá sucessor
            if(this.#tail) this.#tail.next = null
            // Remoção do último nodo: tail é null, head tem que ser também
            if(this.#count === 1) this.#head = null
        }

        // 4º caso: remoção posição intermediária
           else{
               removed = this.#findNode(pos)
               const before = removed.prev  //NODO ANTERIOR AO DA REMOÇÃO
               const after = removed.next // NODO POTERIOR AO DA REMOÇÃO

               //O NODO ANTERIOR PASSA A APONTAR PARA O POSTERIOR
               before.next = after
               // O NODO POSTERIOR PASSA A APONTAR PARA O ANTERIOR
               after.prev = before
           }
        this.#count--

        return removed.data
    }

    removedHead(){
        return this.remove(0)
    }

    removeTail(){
        return this.remove(this.#count - 1)
    }

    peek(pos){
        if(this.empty || pos < 0 || pos > this.#count -1) return undefined
        const node = this.#findNode(pos)
        return node.data
    }

    peekHead(){
        return this.peek(0)
    }

    peekTail(){
        return this.peek(this.#count -1)
    }

    //PROCURA UM NODO PELO SEU VALOR E RETORNA A POSIÇÃO OU -1 CASO NÃO EXISTA
      indexOf(val){ 
         // CALCULAR A POSIÇÃO DO MEIO DO VETOR, ARREDONDANDO PARA CIMA
      const middle = Math.ceil(this.#count / 2)
      let node1 = this.#head
      let node2 = this.#tail
      for(let i = 0; i <= middle; i++){
           //verifica se o valor está no node1 ( partindo do início)
       if(node1.data === val) return i  // Retorna a posição do  for  
          //VERIFICA SE O VALOR ESTÁ NO NODE 2 (PARTINDO DO FINAL)  
       if(node2.data === val) return this.#count -1 - i //RETORNA A POSIÇÃO RETROATIVA DO for   
       node1 = node1.next // node1 anda para a frente
       node2 = node2.next // node2 anda para trás
      }
      return -1 // VALOR NÃO EXISTE NA LISTA

     }
    print() {
        let output = '( '
        let node = this.#head
        for(let i = 0; i < this.#count; i++) {
            output += `[${i}]: ${node.data}`
            if(node.next) output += ' <-> '
            node = node.next
        }
        return output + ` ) count: ${this.#count}`
    }

    printReverse() {
        let output = '( '
        let node = this.#tail
        for(let i = this.#count - 1; i >= 0; i--) {
            output += `[${i}]: ${node.data}`
            if(node.prev) output += ' <-> '
            node = node.prev
        }
        return output + ` ) count: ${this.#count}`
    }

}

const lista = new DoublyLinkedList()
console.log(lista.print())

lista.insert(0, 'Odorico')  // Primeiro nodo (lista vazia)
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(1, 'Gercina')  // Inserção no final
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(0, 'Temístocles')  // Inserção no início
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(1, 'Deusdete')  // Inserção intermediária
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(2, 'Alípio')  // Inserção intermediária
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(2, 'Cremilda')  // Inserção intermediária
console.log(lista.print())
console.log(lista.printReverse())

let removed = lista.removedHead()
console.log({removed})
console.log(lista.print())
console.log(lista.printReverse())

 removed = lista.removeTail()
console.log({removed})
console.log(lista.print())
console.log(lista.printReverse())

removed = lista.remove(2)
console.log({removed})
console.log(lista.print())
console.log(lista.printReverse())

lista.insertTail('Pierina')
lista.insertTail('Ildefonso')
console.log(lista.print())
console.log(lista.printReverse())

let peekHead = lista.peekHead
let peekTail = lista.peekTail
let peek3 = lista.peek(3)
console.log({peekHead, peekTail, peek3})

let idxDeusdete = lista.indexOf('Deusdete')
let idxPierina = lista.indexOf('Pierina')
let idxCremilda = lista.indexOf('Cremilda')
let idxIldefonso = lista.indexOf('Ildefonso')
let idxCatifunda = lista.indexOf('Catifunda')
console.log({idxDeusdete, idxPierina, idxCremilda, idxIldefonso, idxCatifunda})

