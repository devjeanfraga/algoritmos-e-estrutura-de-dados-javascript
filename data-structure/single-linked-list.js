/*
  Listas vinculada

  - Não tem indexes !
  - Tem o HEAD que é uma variável que indica o início da lista 
  - O Tail (calda) que indica o final da lista
  - Não aceita acesso randomico como arrays, ou seja, pra eu acessar um elemento devo percorrer toda lista. 
  - Elementos são nós e cada nó está conectado com o ponteiro  do próximo nó.

  Vantagens

  - São ótimas para inserção e deletação de items e m casos de dados muito longos. 



  Contém nós e cada nó tem um valor 
  e um ponteiro para outro nó ou nulo. 

  Elementos sem índices que apontam para
  o próximo elemento. 
  
  Analogia: Como se fosse um monte de vagões de 
  um trem onde um vagão se conecta ao próximo. 

*/

class Node {
  constructor ( value ) {
    this.value = value; // peace data 
    this.next = null; // reference to the next node
  } 
}

class SinglyLinkedList  {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* INSERÇÃO DE VALORES NO FINAL DA LISTA */
  push (value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }



}



