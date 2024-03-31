```javascript 
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

/* CLASS QUE ABRIGA O DADO */
class Node {
  constructor ( value ) {
    this.value = value; // peace data 
    this.next = null; // reference to the next node
  } 
}

/* ESTRUTURA DE DADOS */
class SinglyLinkedList  {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  /* 
    INSERÇÃO DE VALORES NO FINAL DA LISTA 
    [Pseudo code]
    -This function should accept a value
    -Create a new node using the value passed to the function
    -If there is no head property on the list, set the head and tail to be the newly[recém] created node
    -Otherwise[caso contrario] set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    -Increment the length by one
    -Return the linked list
  */
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
  
  /* 
    REMOÇÃO DE VALORES NO FINAL DA LISTA
    [Pseudo code]
    
    - If there are no nodes in tehlist, return undefined
    - Loop through [Percorrer] the list until[até] you reach[ VERBO: alcançar, atingir, abranger, penetrar, montar, chegar à. SUBSTANTIVO: o alcance, o poder, a capacidade, o ambito] the tail.
    - Set the tail to be the end to last node
    - Set the next property of the end/tail to last node to be null
    - Decrement the length of the list by 1
    - Return the value of the node removed
  */
    pop () {
      if(!this.head) return undefined; 
      let current = this.head;
      let newTail =  current;

      while (current.next !== null) {
          newTail = current //valor atual
          current =  current.next // indo pro próximo valor
      }

      this.tail = newTail; // defini a nova calda
      this.tail.next = null; // redefini o next 
      this.length-- // diminui o lenght da lista
      if (this.length === 0 ) { 
          this.head = null;
          this.tail = null;
      }
      return current; // retorna o valor removido do final da lista
    }

  /* 
    REMOÇÃO DE VALORES NO INÍCIO DA LISTA
    [Pseudo code]
    
    - If there are no nodes, return undefined
    - Store the current head property in a variable
    - Set the head property to be the current head's next property
    - Decrement the length by 1
    - Return the value of node removed
  */
    shift () {
      if (!this.head) return undefined;
      let currentHead = this.head;
      this.head =  currentHead.next;
      this.length--;
      if (this.length === 0 ) this.tail = null;
      return currentHead.value;
    }
  
  /* 
    ADICIONAR VALORES NO INÍCIO DA LISTA
    [Pseudo code]
    
    - This function should accept a value
    - Create a new node using the value passed to the function 
    - If there is no head property on the list, set the head and tail to be the newly create node
    - Otherwise set the newly create node's next property to be the current head property on the list. 
    - Set the head property on the list to be that newly created node
    - Increment the length of the list by 1 
    - Return the linked list 
  */

    unshift (value) {
      let newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail =  this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this; //retorna a lista 
    }

    get (index) {
      if (index < 0 || index >= this.length ) return null; 
      let current =  this.head;
      let counter = 0 

      while (index !== counter) {
        current = current.next;
        counter++; 
      }
      return current; 
    }

    set (index, value) {
      let foundNode = this.get(index);
      if (foundNode) { 
        foundNode.value = value;
        return true;
      }
      return false;   
    }

    /* 
    INSERIR VALORES EM QUALQUER POSIÇÃO  DA LISTA
    [Pseudo code]
    
    - If the index is less than zero or greather than the length, return false
    - If the index is the same as the length, push a new node to the end of the list
    - If the index is 0, unshift a new node to the start of the list 
    - Otherwise, using the get method, access the node at the index -1
    - Set the next property on that node to be the new node 
    - Set the next property on the new node to be the previous next 
    - Increment the length 
    - Return true
  */

    insert (index, value) {
      if (index < 0 || index > this.length ) return false;
      if ( index === this.length ) return !!this.push(value);
      if (index === 0 ) return !!this.unshift(value);

      let newNode = new Node(value);
      let prev = this.get(index-1);
      let temp =  prev.next; 
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true; 
    }

    remove (index) {
      if (index < 0 || index >= this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length -1) return this.pop();

      let previousNode = this.get(index -1);
      let removed = previousNode.next;
      previousNode.next = removed.next; // previousNode.next.next
      this.length--;
      return removed; 
    }

    reverse () {
      let node = this.head; // abrigar o início da lista numa variável; 
      this.head = this.tail; // atribuir o inicio da lista ao final da lista;
      this.tail = node; // atribuir o final da lista ao início da lista que está abrigado numa variável;
      let prev = null; // atribuir prev a null, pois devemos garantir que o proximo será null   
      let next; // declarar a variável que vai abrigar o valor do próximo node;
      for (let i = 0; i < this.length; i++) {
          next = node.next; // apontar p/ C; 
          node.next = prev; // apontar A;
          prev = node; //  apontar p/ A  
          node = next; // apontar p/ B
      /*
      
      [ A,       B,       C,        D ]
                Prev ->  Node  ->  Next
        C  ->    B   ->   A    ->  Null
      */ 
      }
      return this; 
  }


    print () {
      var arr = [];
      var current = this.head;
      while (current) {
        arr.push(current.value)
        current = current.next
      }
      return arr; 
    }


}

```