import { DoublyLinkedList } from './lib/DoublyLinkedList.mjs'

const list = new DoublyLinkedList()

function insertInList(val) {

    // 1º caso: lista vazia
    if(list.empty) list.insertTail(val)

    // 2º caso: procurando a posicao de inserção
    else {
        for(let i = 0; i < list.count; i++) {
            // Buscar o valor do nodo da posição atual
            let valPos = list.peek(i)
            // Compara o valor a ser inserido (val) com o valor da posição atual (valPos)
            if(valPos > val) {
                // Se o valor que já está na lista é MAIOR que o valor que queremos inserir,
                // encontramos a posição de inserção
                list.insert(i, val)
                return              // Sai da função
            }
        }
        // Se rodamos todo o for sem encontrar a posição de inserção,
        // é porque o novo valor deve ser inserido no final da lista
        list.insertTail(val)
    }

}

insertInList(25)
console.log(list.print())

insertInList(14)
console.log(list.print())

insertInList(19)
console.log(list.print())

insertInList(3)
console.log(list.print())

insertInList(37)
console.log(list.print())

insertInList(19)
console.log(list.print())